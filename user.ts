  export module UserModule2 {
     export const name = "suzuki";
     module AddressModule2 {
        const zip = "222-2222"
    }
}

// TODO Exportの方法を調べる。
export * from "./user";