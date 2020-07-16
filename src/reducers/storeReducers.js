import {
  AGREGAR_UNO,
  BORRAR,
  BORRAR_TODO,
  AGREGAR,
  BORRAR_UNO,
} from "../types/storeReducers";

const INITIAL_STATE = {
  storeItems: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AGREGAR_UNO:
      let newStoreItemsAdd = [...state.storeItems];
      let getItem = state.storeItems.find(
        (item) => item.code === action.payload.code
      );

      let indexExist = state.storeItems.indexOf(getItem);

      if (indexExist === -1) {
        return { ...state, storeItems: [...state.storeItems, action.payload] };
      } else {
        newStoreItemsAdd[indexExist].cant++;
        return { ...state, storeItems: newStoreItemsAdd };
      }

    case AGREGAR:
      let newStoreItemsAdd2 = [...state.storeItems];
      let getItem2 = state.storeItems.find(
        (item) => item.code === action.payload.code
      );

      let indexExist2 = state.storeItems.indexOf(getItem2);
      if (indexExist2 === -1) {
        return { ...state, storeItems: [...state.storeItems, action.payload] };
      } else {
        newStoreItemsAdd2[indexExist2].cant = action.payload.cant;
        return { ...state, storeItems: newStoreItemsAdd2 };
      }

    case BORRAR:
      let index = state.storeItems.indexOf(action.payload);
      let newStoreItems = [...state.storeItems];
      if (index !== -1) {
        newStoreItems.splice(index, 1);
        return { ...state, storeItems: newStoreItems };
      } else {
        return state;
      }

    case BORRAR_UNO:
      let newStoreItemsDelete = [...state.storeItems];
      let getItemDelete = state.storeItems.find(
        (item) => item.code === action.payload.code
      );

      let indexExistDelete = state.storeItems.indexOf(getItemDelete);

      if (indexExistDelete !== -1) {
        if (newStoreItemsDelete[indexExistDelete].cant > 1) {
          newStoreItemsDelete[indexExistDelete].cant--;
          return { ...state, storeItems: newStoreItemsDelete };
        }
        return state;
      } else {
        return state;
      }

    case BORRAR_TODO:
      return { ...state, storeItems: [] };

    default:
      return state;
  }
};
