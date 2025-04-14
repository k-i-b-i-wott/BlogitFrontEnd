import {create} from 'zustand'
import {persist} from 'zustand/middleware'




    interface UserState{
        user:any

        setUserInformation:(userObject:any)=>void

        setRemoveInformation:()=>void
    }
    

    const useUserStore = create<UserState>()(
        persist((set) => ({
            user: null,
            setUserInformation: (userObject) => set({ user: userObject }),
            setRemoveInformation: () => set({ user: null }),
        }), { name: 'user-storage' })
    )

    export default useUserStore

