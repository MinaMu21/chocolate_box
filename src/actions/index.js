//Action
///Ajout chocolats dans la boite!
export const addChocolate = (name) => ({
        type: 'ADD_CHOCOLATE',
        name,
})

///Mange toute la boite
export const clearBox = () => ({
        type: 'CLEAR_BOX',
});

///Mange 1 chocolat
export const eatOne = (index) => ({
        type: 'EAT_ONE',
        index
      });