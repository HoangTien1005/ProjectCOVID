const fakePaymentData = [
    {
        id: '1',
        name: "Thanh toán hóa đơn",
        amount: "500$",
        date: '22/12/2021'
    },
    {
        id: '2',
        name: "Thanh toán nợ",
        amount: "50$",
        date: '22/12/2021'
    },
    {
        id: '3',
        name: "Nạp tiền",
        amount: "100$",
        date: '22/12/2021'
    },
    {
        id: '4',
        name: "Thanh toán hóa đơn",
        amount: "200$",
        date: '22/12/2021'
    },
]

const fakePurchaseData = [
    {
        detail_id: '1',
        order_id: '1',
        amount: '5',
        total: '200$',
        package_name: 'Gói hỗ trợ 69',
        create_at: '22/12/2021'
    },
    {
        detail_id: '2',
        order_id: '1',
        amount: '5',
        total: '200$',
        package_name: 'Gói hỗ trợ 70',
        create_at: '22/12/2021'
    },
    {
        detail_id: '3',
        order_id: '2',
        amount: '3',
        total: '100$',
        package_name: 'Gói hỗ trợ 12',
        create_at: '22/12/2021'
    },
    {
        detail_id: '4',
        order_id: '2',
        amount: '1',
        total: '500$',
        package_name: 'Gói hỗ trợ 23',
        create_at: '22/12/2021'
    },
    {
        detail_id: '5',
        order_id: '3',
        amount: '4',
        total: '700$',
        package_name: 'Gói hỗ trợ 45',
        create_at: '22/12/2021'
    },
]

const fakeManagementData = [
    {
        type: 'Thêm mới',
        description: 'Được thêm vào danh sách những ca bệnh',
        create_at: '22/12/2021',
    },
    {
        type: 'Chuyển nơi điều trị',
        description: 'Chuyền từ khu cách ly A sang khu cách ly B',
        create_at: '22/12/2021',
    },
    {
        type: 'Thay đổi trạng thái',
        description: 'Chuyền từ trạng thái F0 thành trạng thái F1',
        create_at: '22/12/2021',
    },
    {
        type: 'Chuyển nơi điều trị',
        description: 'Chuyền từ khu cách ly B sang khu cách ly C',
        create_at: '22/12/2021',
    },
    {
        type: 'Xuất viện',
        description: 'Được trở về từ khu cách ly',
        create_at: '22/12/2021',
    },
]


module.exports = {
    getProfile: async (req, res) => {
        res.render('layouts/user/profile',
            {
                layout: 'user/main',
                active: { profile: true }
            }
        )
    },
    getChangePassword: async (req, res) => {
        res.render('layouts/user/changePassword',
            {
                layout: 'user/main',
                active: { profile: true }
            }
        )
    },
    getPayment: async (req, res) => {
        res.render('layouts/user/payment',
            {
                layout: 'user/main',
                active: { payment: true },
                data: fakePaymentData
            }
        )
    },
    getManagement: async (req, res) => {
        res.render('layouts/user/management',
            {
                layout: 'user/main',
                active: { management: true },
                data: fakeManagementData
            }
        )
    },
    getPurchase: async (req, res) => {
        res.render('layouts/user/purchase',
            {
                layout: 'user/main',
                active: { purchase: true },
                data: fakePurchaseData
            }
        )
    },
}