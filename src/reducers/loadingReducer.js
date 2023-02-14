export const loadingInitialState = [];

export default (state = loadingInitialState, { type, meta }) => {
  const match = /(.*)_(REQUEST|SUCCESS|FAIL)/.exec(type);

  // console.log('loading state: ', state);
  // console.log('type: ', type);
  // console.log('payload: ', payload);

  // do nothing
  if (!match) return state;

  const [, actionType, actionName] = match;
  console.log(actionType);
  console.log(actionName);

  if (actionName === 'REQUEST') {
    // update action status
    return [
      ...state,
      {
        action: actionType,
        ...meta,
      },
    ];
  }

  // remove action
  return state.filter(
    (x) => !(x.action === actionType && x.loadingId === meta.loadingId),
  );
};
