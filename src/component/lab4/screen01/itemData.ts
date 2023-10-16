interface IData {
    id:string,
    nameProduct:string, 
    nameShop: string,
    imageURL: any
}

export const itemData : IData[] = [
    { id: '1', nameProduct: 'Ca nấu lẩu, nấu mì mini', nameShop: 'Shop Devang', imageURL:require('../../../../assets/lab4/ca_nau_lau.png') },
    { id: '2', nameProduct: '1kg khô gà bơ tỏi', nameShop: 'Shop LTD Food', imageURL: require('../../../../assets/lab4/ga_bo_toi.png') },
    { id: '3', nameProduct: 'Xe cần cẩu đa năng', nameShop: 'Shop Thế giới đồ chơi', imageURL: require('../../../../assets/lab4/xa_can_cau.png') },
    { id: '4', nameProduct: 'Đồ chơi dạng mô hình', nameShop: 'Shop Thế giới đồ chơi', imageURL: require('../../../../assets/lab4/do_choi_dang_mo_hinh.png') },
    {id:'5', nameProduct: 'Lãnh đạo giản đơn', nameShop: 'Shop Minh Long Book', imageURL: require('../../../../assets/lab4/lanh_dao_gian_don.png') },
    {id:'6',nameProduct: 'Hiểu lòng con trẻ', nameShop: 'Shop Thế giới đồ chơi', imageURL: require('../../../../assets/lab4/hieu_long_con_tre.png')}
]