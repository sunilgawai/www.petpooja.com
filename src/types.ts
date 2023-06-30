

export interface ITable {
    id: number;
    cart_table_id: string;
    cart_table_name: string;
    Cart: null | ICart
}

export interface ICart {
    customer_id: number;
    payment_status: boolean;
    payment_method: string;
    items: ICartItem[];
}

export interface ICartItem {
    name?: string;
    item_id: number;
    quantity: number;
}


export interface Categories {
    categories: ICategory[];
}

export interface ICategory {
    Shop_Code: string;
    id: number;
    Category_Id: number;
    Category_Name: string;
    Category_Discontinued: boolean;
    Category_Code: string;
    IsSpecial: string;
    Chapter_ID: number;
    CategoryGroup_ID: number;
    Sort_Index: number;
    Category_HSNCode: null | string;
    Series: null | string;
    BusinessType_ID: string;
    createdAt: string;
    updatedAt: string;
}

// Generated by https://quicktype.io

export interface IProduct {
    Shop_Code: string;
    id: number;
    Item_Id: number;
    Item_Code: string;
    tbl_categorymaster_id: number;
    Item_Name: string;
    Item_Description: null;
    Item_UOM: string;
    tbl_srate_id: number;
    Item_Location: null;
    Item_Manufacturer: null;
    Item_OrderPlaceTime: null;
    Item_DeliverySchedule: null;
    Item_Egg: string;
    Item_Veg: null;
    Item_Expiry: number;
    Item_MaxOrderLevel: number;
    Item_MinOrderLevel: number;
    Item_ReorderLevel: number;
    Item_MOQ: null;
    Increment_Factor_For_additional_Qty: number;
    Item_FlavourId: null;
    Item_Discontinued: boolean;
    Item_Favourite: null;
    Item_FixWeight: number;
    Item_DeliverySchedule2: string;
    Item_DeliverySchedule9: string;
    Item_DeliveryDays: string;
    Item_Falvours2: string;
    Item_Flavours9: string;
    Item_MinQty: number;
    Item_Image: null;
    Item_IsMinQtyMandatory: boolean;
    Item_IsShapeRequired: boolean;
    Item_Shapes: string;
    Item_ShortName: string;
    Item_Type: string;
    Item_IsSpecial: string;
    Item_UnitID: number;
    Item_ChapterID: number;
    Item_TaxID: number;
    Item_FreightRatePercentage: number;
    Item_MaxWeight: null;
    Item_IsRemarkRequired: boolean;
    Item_PackagingTypeID: number;
    Item_Large: boolean;
    Item_IsExcisable: boolean;
    Item_LeadTime: number;
    IsAvailableForUrgentOrder: boolean;
    CalculateExciseOnMRP: boolean;
    Rack_ID: null;
    ItemsPerTray: number;
    NoOfDaysToManufacture: number;
    Station_ID: number;
    Item_OrderTypes: string;
    DiscountPercentage: number;
    MarginPercentage: number;
    Item_EANCode: string;
    AllowRateEditing: boolean;
    AllowNegativeStock: boolean;
    Item_HSNCode: string;
    NoOfPieces: number;
    ProductType: string;
    IsAssemblyItem: boolean;
    UrgentOrderShapes: null;
    UrgentOrderFlavours: null;
    IsItemReturnable: null;
    createdAt: string;
    updatedAt: string;
}

