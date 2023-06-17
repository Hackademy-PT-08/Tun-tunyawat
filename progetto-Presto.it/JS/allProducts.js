const allProducts = [
        {   
            category: 'Phone',  
            brand: 'Apple',
            name: 'Iphone 13',
            price: '799',
            stock: '20',
            detail: '',
            image: 'https://m.media-amazon.com/images/I/71dpTXFz+dL._AC_SX522_.jpg'
        },
        {   
            category: 'Phone',
            brand: 'Apple',
            name: 'Iphone 13 pro',
            price: '950',
            stock: '25',
            image: 'https://m.media-amazon.com/images/I/61RAsVPOjxL._AC_SL1500_.jpg',
            detail: ''
        },
        {   
            category: 'Phone',
            brand: 'Apple',
            name: 'Iphone 11',
            price: '300',
            stock: '100',
            image: 'https://m.media-amazon.com/images/I/71i2XhHU3pL._AC_SX522_.jpg',
            detail: ''
        },
        {   
            category: 'Phone',
            brand: 'Apple',
            name: 'Iphone 13 pro max',
            price: '1100',
            stock: 'OUT',
            image: 'https://m.media-amazon.com/images/I/61b2CeHwmvL._AC_SX522_.jpg',
            detail: ''
        },
        {   
            category: 'Phone',
            brand: 'Apple',
            name: 'Iphone 11 pro',
            price: '550',
            stock: '40',
            image: 'https://m.media-amazon.com/images/I/71D1URasMyL._AC_SY679_.jpg',
            detail: ''
        },
        {   
            category: 'Phone',
            brand: 'Apple',
            name: 'Iphone 14',
            price: '950',
            stock: '120',
            image: 'https://m.media-amazon.com/images/I/61cwywLZR-L._AC_SX679_.jpg',
            detail: ''
        },
        {   
            category: 'Phone',
            brand: 'Apple',
            name: 'Iphone 14 pro',
            price: '1200',
            stock: '150',
            image: 'https://m.media-amazon.com/images/I/61XO4bORHUL._AC_SX679_.jpg',
            detail: ''
        },
        {   
            category: 'Phone',
            brand: 'Apple',
            name: 'Iphone 14 pro max',
            price: '1300',
            stock: '120',
            image: 'https://m.media-amazon.com/images/I/71yzJoE7WlL._AC_SX522_.jpg',
            detail: ''
        },
        {   
            category: 'Phone',
            brand: 'Apple',
            name: 'Iphone 12 ',
            price: '700',
            stock: '50',
            image: 'https://m.media-amazon.com/images/I/71MtcgbTdXL._AC_SX522_.jpg',
            detail: ''
        },
        {   
            category: 'Phone',
            brand: 'Apple',
            name: 'Iphone 12 pro ',
            price: '850',
            stock: '45',
            image: 'https://m.media-amazon.com/images/I/71YlH-4MUQL._AC_SX679_.jpg',
            detail: ''
        },
        {   
            category: 'Watch',
            brand: 'Apple',
            name: 'Apple Watch SE (2ª gen.) (GPS + Cellular)',
            price: '299',
            stock: '60',
            detail: '',
            image: 'https://m.media-amazon.com/images/I/71ABtqvzVKL._AC_SX679_.jpg'
        },
        {   
            category: 'Watch',
            brand: 'Apple',
            name: 'Apple Watch Series 8 (GPS + Cellular)',
            price: '650',
            stock: '100',
            detail: '',
            image: 'https://m.media-amazon.com/images/I/719rHnQRpML._AC_SX679_.jpg'
        },
        {   
            category: 'Watch',
            brand: 'Apple',
            name: 'Apple Watch Ultra (GPS + Cellular)',
            price: '999',
            stock: '120',
            detail: '',
            image: 'https://m.media-amazon.com/images/I/915dwOcvMLL._AC_SX679_.jpg'
        },
        {   
            category: 'Watch',
            brand: 'Apple',
            name: 'Apple Watch SE (1ª gen.) (GPS + Cellular)',
            price: '339',
            stock: '70',
            detail: '',
            image: 'https://m.media-amazon.com/images/I/71YAsNWuoPL._AC_SL1500_.jpg'
        },
        {   
            category: 'Watch',
            brand: 'Apple',
            name: 'Apple Watch Serie 7 (GPS)',
            price: '360',
            stock: '90',
            detail: '',
            image: 'https://m.media-amazon.com/images/I/71egrdyA8zL._AC_SX522_.jpg'
        },
        {   
            category: 'Watch',
            brand: 'Apple',
            name: 'Apple Watch Series 5 (GPS)',
            price: '290',
            stock: '60',
            detail: '',
            image: 'https://m.media-amazon.com/images/I/71Krd8xVrUL._AC_SX522_.jpg'
        },
        {   
            category: 'Watch',
            brand: 'Apple',
            name: 'Apple Watch SE (GPS)',
            price: '229',
            stock: '90',
            detail: '',
            image: 'https://m.media-amazon.com/images/I/71fq+Dz2kZL._AC_SX522_.jpg'
        },
        {   
            category: 'Laptop',
            brand: 'Apple',
            name: 'Apple MacBook Air con chip Apple M1',
            price: '950',
            stock: '50',
            image: 'https://m.media-amazon.com/images/I/41hUC9GqDjL._AC_SL1000_.jpg',
            detail: ''
        },
        {   
            category: 'Laptop',
            brand: 'Apple',
            name: 'Apple PC Portatile MacBook Air 2022 con chip M2',
            price: '980',
            stock: '60',
            image: 'https://m.media-amazon.com/images/I/71EbycNfD4L._AC_SX679_.jpg',
            detail: ''
        },
        {   
            category: 'Laptop',
            brand: 'Apple',
            name: 'Apple MacBook Pro Retina 15" Touch bar 2018',
            price: '1099',
            stock: '50',
            image: 'https://m.media-amazon.com/images/I/41rKoTAdxzL._AC_.jpg',
            detail: ''
        },
        {   
            category: 'Laptop',
            brand: 'Apple',
            name: 'Apple 2020 MacBook Pro ',
            price: '1800',
            stock: '45',
            image: 'https://m.media-amazon.com/images/I/61XiLRM32NL._AC_SL1500_.jpg',
            detail: ''
        },
        {   
            category: 'Laptop',
            brand: 'Apple',
            name: 'Apple MacBook Pro 15.4" con Touch Bar 2017',
            price: '850',
            stock: '30',
            image: 'https://m.media-amazon.com/images/I/516qDz7-QcL._AC_.jpg',
            detail: ''
        },
        {   
            category: 'Laptop',
            brand: 'Apple',
            name: 'Apple 2019 MacBook Pro',
            price: '2100',
            stock: '70',
            image: 'https://m.media-amazon.com/images/I/61xERL34brL._AC_SL1500_.jpg',
            detail: ''
        },
        {   
            category: 'Laptop',
            brand: 'Apple',
            name: 'Apple 2021 MacBook Pro',
            price: '2500',
            stock: '100',
            image: 'https://m.media-amazon.com/images/I/61aUBxqc5PL._AC_SL1500_.jpg',
            detail: ''
        },
        {   
            category: 'Laptop',
            brand: 'Apple',
            name: 'Apple PC Portatile MacBook Pro 2022 con chip M2',
            price: '1500',
            stock: '70',
            image: 'https://m.media-amazon.com/images/I/71xcuahD4+L._AC_SL1500_.jpg',
            detail: ''
        },
        {   
            category: 'Laptop',
            brand: 'Apple',
            name: 'Apple 2023 MacBook Pro Portatile con Chip M2 Pro: CPU-10-CORE',
            price: '2500',
            stock: '200',
            image: 'https://m.media-amazon.com/images/I/61CHqS31PiL._AC_SL1500_.jpg',
            detail: ''
        },
        {   
            category: 'Laptop',
            brand: 'Apple',
            name: 'Apple 2023 MAcBook Pro Portatile con Chip M2 Pro: CPU-12-CORE',
            price: '2700',
            stock: '200',
            image: 'https://m.media-amazon.com/images/I/61fd2oCrvyL._AC_SL1500_.jpg',
            detail: ''
        },
        {   
            category: 'Laptop',
            brand: 'Apple',
            name: 'Apple 2020 iMac Display Retina 5K',
            price: '2499',
            stock: '60',
            image: 'https://m.media-amazon.com/images/I/71s-7tbfQKL._AC_SL1500_.jpg',
            detail: ''
        },
        {   
            category: 'Laptop',
            brand: 'Apple',
            name: 'Apple 2021 iMac con Chip M1',
            price: '2050',
            stock: '85',
            image: 'https://m.media-amazon.com/images/I/61PenuYtXQS._AC_SL1500_.jpg',
            detail: ''
        },
        {   
            category: 'Laptop',
            brand: 'Apple',
            name: '2019 Apple iMac con Retina 4k Display',
            price: '750',
            stock: '60',
            image: 'https://m.media-amazon.com/images/I/61NTwKbTTaL._AC_SL1000_.jpg',
            detail: ''
        },
        {
            category: 'Laptop',
            brand: 'Samsung',
            name: 'SAMSUNG Galaxy Book3 360',
            price: '1200',
            stock: '68',
            image: 'https://m.media-amazon.com/images/I/710G9fY0BtL._AC_SX522_.jpg',
            detail: ''
        },
        {
            category: 'Laptop',
            brand: 'Samsung',
            name: 'SAMSUNG Galaxy Book3 Pro',
            price: '1699',
            stock: '105',
            image: 'https://m.media-amazon.com/images/I/61Gd-Vi+V7L._AC_SY300_SX300_.jpg',
            detail: ''
        },
        {
            category: 'Laptop',
            brand: 'Samsung',
            name: 'SAMSUNG Galaxy Book3',
            price: '1049',
            stock: '98',
            image: 'https://m.media-amazon.com/images/I/61Pdb2wbgbL._AC_SX522_.jpg',
            detail: ''
        },
        {
            category: 'Laptop',
            brand: 'Samsung',
            name: 'SAMSUNG Galaxy Book3 Ultra',
            price: '3499',
            stock: '170',
            image: 'https://m.media-amazon.com/images/I/61BY-V5sUHL.__AC_SX300_SY300_QL70_ML2_.jpg',
            detail: ''
        },
        {
            category: 'Laptop',
            brand: 'Samsung',
            name: 'Samsung Galaxy Book2',
            price: '679',
            stock: '50',
            image: 'https://m.media-amazon.com/images/I/71BL8Cq050L._AC_SX679_.jpg',
            detail: ''
        },
        {
            category: 'Laptop',
            brand: 'Samsung',
            name: 'SAMSUNG Galaxy Book2 GO 5G',
            price: '629',
            stock: '67',
            image: 'https://m.media-amazon.com/images/I/81GlWZkz-GL._AC_SX679_.jpg',
            detail: ''
        },
        {
            category: 'Watch',
            brand: 'Samsung',
            name: 'SAMSUNG Galaxy Watch5',
            price: '300',
            stock: '70',
            image: 'https://m.media-amazon.com/images/I/61gwvIH7qfL._AC_SX679_.jpg',
            detail: ''
        },
        {
            category: 'Watch',
            brand: 'Samsung',
            name: 'Samsung Galaxy Watch5 Pro',
            price: '400',
            stock: '68',
            image: 'https://m.media-amazon.com/images/I/61gwvIH7qfL._AC_SX679_.jpg',
            detail: ''
        },
        {
            category: 'Watch',
            brand: 'Samsung',
            name: 'SAMSUNG Galaxy Watch5',
            price: '300',
            stock: '70',
            image: 'https://m.media-amazon.com/images/I/61gwvIH7qfL._AC_SX679_.jpg',
            detail: ''
        },
        {
            category: 'Watch',
            brand: 'Samsung',
            name: 'Samsung Galaxy Watch4',
            price: '250',
            stock: '45',
            image: 'https://m.media-amazon.com/images/I/61gwvIH7qfL._AC_SX679_.jpg',
            detail: ''
        },
        {
            category: 'Watch',
            brand: 'Samsung',
            name: 'SAMSUNG Galaxy Watch Active 2',
            price: '599',
            stock: '70',
            image: 'https://m.media-amazon.com/images/I/716KKssFT6L._AC_SX679_.jpg',
            detail: ''
        },
        {
            category: 'Watch',
            brand: 'Samsung',
            name: 'Samsung Galaxy Watch Active',
            price: '230',
            stock: '37',
            image: 'https://m.media-amazon.com/images/I/71qLG5b6WdL._AC_SY879_.jpg',
            detail: ''
        },
        {   
            category: 'Phone',
            brand: 'Samsung',
            name: 'Samsung Galaxy S20+',
            price: '340',
            stock: '40',
            image: 'https://m.media-amazon.com/images/I/71u0Mz7jU6L._AC_SX522_.jpg',
            detail: ''
        },
        {   
            category: 'Phone',
            brand: 'Samsung',
            name: 'Samsung Galaxy S20',
            price: '499',
            stock: '50',
            image: 'https://m.media-amazon.com/images/I/71Nq1XZzu2L._AC_SL1500_.jpg',
            detail: ''
        },
        {   
            category: 'Phone',
            brand: 'Samsung',
            name: 'Samsung Galaxy S20 FE',
            price: '419',
            stock: '50',
            image: 'https://m.media-amazon.com/images/I/71azmHvpegL._AC_SL1500_.jpg',
            detail: ''
        },
        {   
            category: 'Phone',
            brand: 'Samsung',
            name: 'SAMSUNG Smartphone Galaxy S21 5G',
            price: '599',
            stock: '80',
            image: 'https://m.media-amazon.com/images/I/81IWsqrVMTL._AC_SX679_.jpg',
            detail: ''
        },
        {   
            category: 'Phone',
            brand: 'Samsung',
            name: 'Samsung Galaxy S21 FE 5G',
            price: '480',
            stock: '78',
            image: 'https://m.media-amazon.com/images/I/81i+q60ayOL._AC_SL1500_.jpg',
            detail: ''
        },
        {   
            category: 'Phone',
            brand: 'Samsung',
            name: 'Samsung Galaxy S22 5G',
            price: '560',
            stock: '90',
            image: 'https://m.media-amazon.com/images/I/71xZgc0-MRL._AC_SL1500_.jpg',
            detail: ''
        },
        {   
            category: 'Phone',
            brand: 'Samsung',
            name: 'SAMSUNG Galaxy S22+',
            price: '1150',
            stock: '89',
            image: 'https://m.media-amazon.com/images/I/811tiNhR0yL._AC_SX679_.jpg',
            detail: ''
        },
        {   
            category: 'Phone',
            brand: 'Samsung',
            name: 'Samsung Galaxy S22 Ultra 5G',
            price: '1100',
            stock: '102',
            image: 'https://m.media-amazon.com/images/I/81Y4KlEg9BL._AC_SX522_.jpg',
            detail: ''
        },
        {   
            category: 'Phone',
            brand: 'Samsung',
            name: 'Samsung Galaxy S23 5G',
            price: '799',
            stock: '125',
            image: 'https://m.media-amazon.com/images/I/61xk5l4aXOL._AC_SX522_.jpg',
            detail: ''
        },
        {   
            category: 'Phone',
            brand: 'Samsung',
            name: 'Samsung Galaxy S23+',
            price: '1099',
            stock: '140',
            image: 'https://m.media-amazon.com/images/I/71RTnjIG3-L._AC_SL1500_.jpg',
            detail: ''
        },
        {   
            category: 'Phone',
            brand: 'Samsung',
            name: 'Samsung Galaxy S23 Ultra',
            price: '1110',
            stock: '250',
            image: 'https://m.media-amazon.com/images/I/71uNTkDFDxL._AC_SL1500_.jpg',
            detail: ''
        },
        {   
            category: 'Phone',
            brand: 'Samsung',
            name: 'Samsung Galaxy A14',
            price: '220',
            stock: '67',
            image: 'https://m.media-amazon.com/images/I/81aqEBIKEnL._AC_SL1500_.jpg',
            detail: ''
        },
        {   
            category: 'Phone',
            brand: 'Samsung',
            name: 'Samsung Galaxy A34 5G',
            price: '399',
            stock: '78',
            image: 'https://m.media-amazon.com/images/I/71Fu-H0j7-L._AC_SX679_.jpg',
            detail: ''
        },
        {   
            category: 'Phone',
            brand: 'Samsung',
            name: 'Samsung Galaxy A54 5G',
            price: '399',
            stock: '67',
            image: 'https://m.media-amazon.com/images/I/513Mfi-b2VL._AC_SX679_.jpg',
            detail: ''
        },
        {   
            category: 'Phone',
            brand: 'Samsung',
            name: 'Samsung Galaxy A53 5G',
            price: '469',
            stock: '56',
            image: 'https://m.media-amazon.com/images/I/81FYt2eYf0L._AC_SL1500_.jpg',
            detail: ''
        },
        {   
            category: 'Phone',
            brand: 'Samsung',
            name: 'SAMSUNG Galaxy Z Flip4 Smartphone 5G',
            price: '1200',
            stock: '85',
            image: 'https://m.media-amazon.com/images/I/71myywGSCbL._AC_SL1500_.jpg',
            detail: ''
        },
        {   
            category: 'Phone',
            brand: 'Samsung',
            name: 'Samsung Galaxy Z Fold3 5G',
            price: '1900',
            stock: '88',
            image: 'https://m.media-amazon.com/images/I/714FOiPD3DL._AC_SL1276_.jpg',
            detail: ''
        },
        {   
            category: 'Phone',
            brand: 'Samsung',
            name: 'SAMSUNG Galaxy Z Fold4',
            price: '1100',
            stock: '76',
            image: 'https://m.media-amazon.com/images/I/61KWWWWT0EL._AC_SX679_.jpg',
            detail: ''
        },
        {   
            category: 'Phone',
            brand: 'Samsung',
            name: 'Samsung Galaxy A53 5G',
            price: '469',
            stock: '56',
            image: 'https://m.media-amazon.com/images/I/81FYt2eYf0L._AC_SL1500_.jpg',
            detail: ''
        },
        {   
            category: 'Phone',
            brand: 'Samsung',
            name: 'Samsung Galaxy A53 5G',
            price: '469',
            stock: '56',
            image: 'https://m.media-amazon.com/images/I/81FYt2eYf0L._AC_SL1500_.jpg',
            detail: ''
        },
]