export const logger = (store) => (next) => (action) => 
{
    console.log(action);
    next(action);
};

export const featuring = (store) => (next) => (actionInfo) => 
{
    const featured = [{ name: 'eddie' }, ...actionInfo.action.payload];
    const updatedActionInfo = 
    {
        ...actionInfo,
        action: {...actionInfo.action, payload: featured}
    };

    next(updatedActionInfo);
};

export const prefix = store => next => actionInfo => 
{
    const prefixed = actionInfo.action.payload.map(
        juanito => ({
            ...juanito, name: "Pokemen: " + juanito.name
        }))

        const updatedAction = { 
            ...actionInfo,
            action: { ...actionInfo.action, payload: prefixed }
        }
       
        next(updatedAction);
};