//  Transfering data between components (Globally)

//  Importing necessary modules
import { create } from 'zustand';

// define store
export const storeObject = create((set) => ({
    object: null,
    setObject: (data) => { typeof data == 'object' && data != null ? set({object:data}) : console.error(`setObject : data must be a non-null object ! ${console.log(typeof(data))}`)},
    clearData: () => set({object:null})
}));