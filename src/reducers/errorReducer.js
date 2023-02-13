export const errorInitialState = [];

export default (state = errorInitialState, { type, payload, meta }) => {
  const match = /(.*)_(REQUEST|FAIL)/.exec(type);

  // do nothing
  if (!match) return state;

  const [, actionType, actionName] = match;
  if (actionName === 'FAIL') {
    // update action status
    return [
      ...state,
      {
        action: actionType,
        ...payload,
        ...meta,
      },
    ];
  }

  // remove action from list
  // return state.filter((x) => x.action !== actionType);
  return state.filter(
    (x) => !(x.action === actionType && x.loadingId === meta.loadingId),
  );
};
