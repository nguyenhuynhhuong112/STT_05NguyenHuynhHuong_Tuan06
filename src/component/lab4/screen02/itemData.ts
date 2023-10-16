interface IData {
    id:string,
    nameProduct:string,
    imageURL:any,
    vote: any,
    price: string,
    discount: string
}

export const itemData: IData[] = [
    {id:'1', nameProduct:'Cáp chuyển từ Cổng USB sang PS2', imageURL: require('../../../../assets/screen02/giacchuyen 1.png'),vote: require('../../../../assets/screen02/Group 4.png'),price:'69.900 đ', discount:'-39%' },
    {id:'2', nameProduct:'Cáp chuyển từ Cổng USB sang PS2', imageURL: require('../../../../assets/screen02/daynguon 1.png'),vote: require('../../../../assets/screen02/Group 4.png'),price:'69.900 đ', discount:'-39%' },
    {id:'3', nameProduct:'Cáp chuyển từ Cổng USB sang PS2', imageURL: require('../../../../assets/screen02/dauchuyendoipsps2 1.png'),vote: require('../../../../assets/screen02/Group 4.png'),price:'69.900 đ', discount:'-39%' },
    {id:'4', nameProduct:'Cáp chuyển từ Cổng USB sang PS2', imageURL: require('../../../../assets/screen02/dauchuyendoi 1.png'),vote: require('../../../../assets/screen02/Group 4.png'),price:'69.900 đ', discount:'-39%' },
    {id:'5', nameProduct:'Cáp chuyển từ Cổng USB sang PS2', imageURL: require('../../../../assets/screen02/carbusbtops2 1.png'),vote: require('../../../../assets/screen02/Group 4.png'),price:'69.900 đ', discount:'-39%' },
    {id:'6', nameProduct:'Cáp chuyển từ Cổng USB sang PS2', imageURL: require('../../../../assets/screen02/daucam 1.png'),vote: require('../../../../assets/screen02/Group 4.png'),price:'69.900 đ', discount:'-39%' }
]