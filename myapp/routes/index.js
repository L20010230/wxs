var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let a = {
        name: ["订购指南", "配送范围", "品牌介绍", "联系我们", "集团订购", "食品生产许可证"]
    }
    // res.render(a);
    res.send(a)
});
router.get('/index', function(req, res, next) {
    let b = [
    {
        Url: "https://img1.1date1cake.com/images/201804/thumb_img/71_thumb_G_1523323288653.jpg",
        name: "榴芒双拼",
        age: "198元/1.0磅",
        xx: "榴莲与芒果的经典双拼",
        gong: [{
            name: "榴芒双拼",
            gongurl: ["http://www.1date1cake.com/images/201804/goods_img/71_P_1523323819795.jpg", "http://www.1date1cake.com/images/201804/1523323287427417354.jpg"],
            gongName: "榴芒双拼DURIAN & MANGO",
            text: "你是“小清新”还是“重口味”？2011年，壹点壹客创作出“榴芒双拼”，一客满足你两种想象。清新芒果慕斯，当季的鲜芒果粒，颗颗明黄灿烂过南国阳光；霸道榴莲忘返，甜软果肉融合淡奶油、白巧，柔情蜜意让你欲罢不能。",
            data: "查看配送时间",
            shijianz:"12:50",
            shijianw:"21:00",
            fen: ["2~4人份", "5~8人份", "9~12人份", "15~20人份"],
            fena: [
                {
                    id: 0,
                    fenimg: "http://www.1date1cake.com/data/goods_attr/3/3ab1f998.jpg",
                    g: 1,
                    s: "512g（1.13磅)",
                    h: "5",
                    jiage: "198"
                },
                {
                    id: 1,
                    fenimg: "http://www.1date1cake.com/data/goods_attr/b/b17a6980.jpg",
                    g: 2,
                    s: "1058g（2.33磅）",
                    h: "10",
                    jiage: "338"
                },
                {
                    id: 2,
                    fenimg: "http://www.1date1cake.com/data/goods_attr/3/3785fe2f.jpg",
                    g: 3,
                    s: "1784g（3.93磅）",
                    h: "15",
                    jiage: "458"
                },
                {
                    id: 3,
                    fenimg: "http://www.1date1cake.com/data/goods_attr/f/fecd7de0.jpg",
                    g: 4,
                    s: "实重2270g（实重5磅）",
                    h: "25",
                    jiage: "788"
                }
            ],
            ft: ["商品详情", "累计评价"],
            shang: ["https://img1.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_01(1)(2).jpg",
             "https://img1.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_02.jpg", "https://img1.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_09(1).jpg", "https://img1.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_08.jpg", "https://img1.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_07.jpg", "https://img2.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_06.jpg", "https://img2.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_05(1).jpg", "https://img2.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_04(1)(4).jpg", 'https://img1.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_03(1).jpg'],
            pjs: [{
                    name: "iL***********7",
                    dat: "（2019-04-23）",
                    pj: "很好吃哦，全家都很喜欢，两种口味，太棒了！",
                    pw: false,
                    ps: "快递包装好，送货小哥热情周到。"
                }, {
                    name: "依d*2",
                    dat: "（2019-04-22）",
                    pj: "味道一般",
                    pw: false,
                    ps: "快递包装好，送货小哥热情周到。"
                },
                {
                    name: "91**朱",
                    dat: "（2019-04-22）",
                    pj: "好吃美味的蛋糕，服务还超乎想象的好，深圳只有壹点壹客能做到。",
                    pw: true,
                    ps: "快递包装好，送货小哥热情周到。"
                },
                {
                    name: "*** ",
                    dat: "（2019-04-22）",
                    pj: "准时、口味好！",
                    pw: false,
                    ps: "快递包装好，送货小哥热情周到。"
                }, {
                    name: "***",
                    dat: "（2019-04-22）",
                    pj: "味道很棒",
                    pw: false,
                    ps: "快递包装好，送货小哥热情周到。"
                }, {
                    name: "LL***********5 ",
                    dat: "（2019-04-21）",
                    pj: "蛋糕很滑，浓浓的香味，很好吃，希望能在全国多开连锁店造福更多人",
                    pw: false,
                    ps: "快递包装好，送货小哥热情周到。"
                }, {
                    name: "***",
                    dat: "（2019-04-22）",
                    pj: "榴莲很好吃啊！还会再买哦！",
                    pw: false,
                    ps: "快递包装好，送货小哥热情周到。"
                }
            ]
        }]
    }, {
        Url: "https://img2.1date1cake.com/images/201708/thumb_img/474_thumb_G_1501659151453.jpg",
        name: "芒莓二重奏",
        age: "198元/1.0磅",
        xx: "蓝莓红丝绒蛋糕+芒果慕斯",
        gong: [{
            name: "芒莓二重奏",
            gongurl: ["http://www.1date1cake.com/images/201804/goods_img/71_P_1523323819795.jpg", "http://www.1date1cake.com/images/201804/1523323287427417354.jpg"],
            gongName: "榴芒双拼DURIAN & MANGO",
            text: "正当季的蓝莓遇上滑嫩绵软的芒果，一口蛋糕可以吃到两种酸甜。来自宝岛的金煌芒铺满蛋糕。看似几粒点缀的蓝莓果粒，还在奶油与红丝绒蛋糕里藏着惊喜。",
            data: "查看配送时间",
            shijianz:"12:50",
            shijianw:"21:00",
            fen: ["2~4人份", "5~8人份", "9~12人份"],
            fena: [{
                    id: 0,
                    fenimg: "http://www.1date1cake.com/data/goods_attr/3/3ab1f998.jpg",
                    g: 1,
                    s: "512g（1.13磅)",
                    h: "5",
                    jiage: "198"
                },
                {
                    id: 1,
                    fenimg: "http://www.1date1cake.com/data/goods_attr/b/b17a6980.jpg",
                    g: 2,
                    s: "1058g（2.33磅）",
                    h: "10",
                    jiage: "338"
                },
                {
                    id: 2,
                    fenimg: "http://www.1date1cake.com/data/goods_attr/3/3785fe2f.jpg",
                    g: 3,
                    s: "1784g（3.93磅）",
                    h: "15",
                    jiage: "458"
                }
            ],
            ft: ["商品详情", "累计评价"],
            shang: ["http://www.1date1cake.com/images/upload/Image/%E8%8A%92%E8%8E%93%E8%AF%A6%E6%83%85pc_01.jpg","https://img1.1date1cake.com//images/upload/Image/%E8%8A%92%E8%8E%93%E8%AF%A6%E6%83%85pc_03(1).jpg","https://img2.1date1cake.com//images/upload/Image/%E8%8A%92%E8%8E%93%E8%AF%A6%E6%83%85pc_04(1).jpg","http://www.1date1cake.com/images/upload/Image/%E8%8A%92%E8%8E%93%E8%AF%A6%E6%83%85pc_05.jpg","http://www.1date1cake.com/images/upload/Image/%E8%8A%92%E8%8E%93%E8%AF%A6%E6%83%85pc_06.jpg"],
            pjs: [{
                    name: "iL***********7",
                    dat: "（2019-04-23）",
                    pj: "很好吃哦，全家都很喜欢，两种口味，太棒了！",
                    pw: false,
                    ps: "快递包装好，送货小哥热情周到。"
                }, {
                    name: "依d*2",
                    dat: "（2019-04-22）",
                    pj: "味道一般",
                    pw: false,
                    ps: "快递包装好，送货小哥热情周到。"
                },
                {
                    name: "91**朱",
                    dat: "（2019-04-22）",
                    pj: "好吃美味的蛋糕，服务还超乎想象的好，深圳只有壹点壹客能做到。",
                    pw: true,
                    ps: "快递包装好，送货小哥热情周到。"
                },
                {
                    name: "*** ",
                    dat: "（2019-04-22）",
                    pj: "准时、口味好！",
                    pw: false,
                    ps: "快递包装好，送货小哥热情周到。"
                }, {
                    name: "***",
                    dat: "（2019-04-22）",
                    pj: "味道很棒",
                    pw: false,
                    ps: "快递包装好，送货小哥热情周到。"
                }, {
                    name: "LL***********5 ",
                    dat: "（2019-04-21）",
                    pj: "蛋糕很滑，浓浓的香味，很好吃，希望能在全国多开连锁店造福更多人",
                    pw: false,
                    ps: "快递包装好，送货小哥热情周到。"
                }, {
                    name: "***",
                    dat: "（2019-04-22）",
                    pj: "榴莲很好吃啊！还会再买哦！",
                    pw: false,
                    ps: "快递包装好，送货小哥热情周到。"
                }
            ]
        }]
    }, {
        Url: "https://img1.1date1cake.com/images/201903/thumb_img/342_thumb_G_1552012281479.jpg",
        name: "草莓公主",
        age: "198元/1.0磅",
        xx: "草莓奶油蛋糕",
        gong: [{
            name: "草莓公主",
            gongurl: ["https://img2.1date1cake.com/images/201712/1513667032275950480.jpg", "http://www.1date1cake.com/images/201712/goods_img/342_P_1513667025930.jpg","http://www.1date1cake.com/images/201712/goods_img/342_P_1513667025237.jpg"],
            gongName: "草莓公主Princess Pink",
            text: "精选依然饱满通红的草莓，小心细切；鲜奶油的乳香，混入草莓果茸与草莓利口酒，只余果味清新，呈现自然淡粉，搭配海绵蛋糕，正好托起这口轻柔。",
            data: "查看配送时间",
            shijianz:"12:50",
            shijianw:"21:00",
            fen: ["2~4人份", "5~8人份", "9~12人份", "15~20人份"],
            fena: [{
                    id: 0,
                    fenimg: "http://www.1date1cake.com/data/goods_attr/8/8410ff17.jpg",
                    g: 1,
                    s: "512g（1.13磅)",
                    h: "5",
                    jiage: "198"
                },
                {
                    id: 1,
                    fenimg: "http://www.1date1cake.com/data/goods_attr/0/06ceeb0b.jpg",
                    g: 2,
                    s: "1058g（2.33磅）",
                    h: "10",
                    jiage: "338"
                },
                {
                    id: 2,
                    fenimg: "http://www.1date1cake.com/data/goods_attr/2/258eae04.jpg",
                    g: 3,
                    s: "1784g（3.93磅）",
                    h: "15",
                    jiage: "458"
                },
                {
                    id: 3,
                    fenimg: "http://www.1date1cake.com/data/goods_attr/3/3ab1f998.jpg",
                    g: 4,
                    s: "实重2270g（实重5磅）",
                    h: "25",
                    jiage: "788"
                }
            ],
            ft: ["商品详情", "累计评价"],
            shang: ["http://www.1date1cake.com/images/upload/Image/%E8%8D%89%E8%8E%93%E5%85%AC%E4%B8%BB_01(1).jpg","https://img2.1date1cake.com//images/upload/Image/%E8%8D%89%E8%8E%93%E5%85%AC%E4%B8%BB_02(1)(1).jpg","http://www.1date1cake.com/images/upload/Image/%E8%8D%89%E8%8E%93%E5%85%AC%E4%B8%BB_03(1).jpg","http://www.1date1cake.com/images/upload/Image/%E8%8D%89%E8%8E%93%E5%85%AC%E4%B8%BB_04(1).jpg","http://www.1date1cake.com/images/upload/Image/%E8%8D%89%E8%8E%93%E5%85%AC%E4%B8%BB_05(1).jpg","https://img2.1date1cake.com//images/upload/Image/%E8%8D%89%E8%8E%93%E5%85%AC%E4%B8%BB022.jpg","http://www.1date1cake.com/images/upload/Image/%E8%8D%89%E8%8E%93%E5%85%AC%E4%B8%BB_07(1).jpg","http://www.1date1cake.com/images/upload/Image/%E8%8D%89%E8%8E%93%E5%85%AC%E4%B8%BB_08(1).jpghttp://www.1date1cake.com/images/upload/Image/%E8%8D%89%E8%8E%93%E5%85%AC%E4%B8%BB_08(1).jpg","http://www.1date1cake.com/images/upload/Image/%E8%8D%89%E8%8E%93%E5%85%AC%E4%B8%BB_09(3).jpg"],
                pjs: [{
                    name: "iL***********7",
                    dat: "（2019-04-23）",
                    pj: "很好吃哦，全家都很喜欢，两种口味，太棒了！",
                    pw: false,
                    ps: "快递包装好，送货小哥热情周到。"
                }, {
                    name: "依d*2",
                    dat: "（2019-04-22）",
                    pj: "味道一般",
                    pw: false,
                    ps: "快递包装好，送货小哥热情周到。"
                },
                {
                    name: "91**朱",
                    dat: "（2019-04-22）",
                    pj: "好吃美味的蛋糕，服务还超乎想象的好，深圳只有壹点壹客能做到。",
                    pw: true,
                    ps: "快递包装好，送货小哥热情周到。"
                },
                {
                    name: "*** ",
                    dat: "（2019-04-22）",
                    pj: "准时、口味好！",
                    pw: false,
                    ps: "快递包装好，送货小哥热情周到。"
                }, {
                    name: "***",
                    dat: "（2019-04-22）",
                    pj: "味道很棒",
                    pw: false,
                    ps: "快递包装好，送货小哥热情周到。"
                }, {
                    name: "LL***********5 ",
                    dat: "（2019-04-21）",
                    pj: "蛋糕很滑，浓浓的香味，很好吃，希望能在全国多开连锁店造福更多人",
                    pw: false,
                    ps: "快递包装好，送货小哥热情周到。"
                }, {
                    name: "***",
                    dat: "（2019-04-22）",
                    pj: "榴莲很好吃啊！还会再买哦！",
                    pw: false,
                    ps: "快递包装好，送货小哥热情周到。"
                }
            ]
        }]
    }, {
        Url: "https://img2.1date1cake.com/images/201904/thumb_img/473_thumb_G_1555030917708.jpg",
        name: "榴芒双拼",
        age: "198元/1.0磅",
        xx: "榴莲与芒果的经典双拼",
        gong: [{
            name: "榴芒双拼",
            gongurl: ["http://www.1date1cake.com/images/201804/goods_img/71_P_1523323819795.jpg", "http://www.1date1cake.com/images/201804/1523323287427417354.jpg"],
            gongName: "榴芒双拼DURIAN & MANGO",
            text: "你是“小清新”还是“重口味”？2011年，壹点壹客创作出“榴芒双拼”，一客满足你两种想象。清新芒果慕斯，当季的鲜芒果粒，颗颗明黄灿烂过南国阳光；霸道榴莲忘返，甜软果肉融合淡奶油、白巧，柔情蜜意让你欲罢不能。",
            data: "查看配送时间",
            shijianz:"12:50",
            shijianw:"21:00",
            fen: ["2~4人份", "5~8人份", "9~12人份", "15~20人份"],
            fena: [{
                    id: 0,
                    fenimg: "http://www.1date1cake.com/data/goods_attr/3/3ab1f998.jpg",
                    g: 1,
                    s: "512g（1.13磅)",
                    h: "5",
                    jiage: "198"
                },
                {
                    id: 1,
                    fenimg: "http://www.1date1cake.com/data/goods_attr/b/b17a6980.jpg",
                    g: 2,
                    s: "1058g（2.33磅）",
                    h: "10",
                    jiage: "338"
                },
                {
                    id: 2,
                    fenimg: "http://www.1date1cake.com/data/goods_attr/3/3785fe2f.jpg",
                    g: 3,
                    s: "1784g（3.93磅）",
                    h: "15",
                    jiage: "458"
                },
                {
                    id: 3,
                    fenimg: "http://www.1date1cake.com/data/goods_attr/f/fecd7de0.jpg",
                    g: 4,
                    s: "实重2270g（实重5磅）",
                    h: "25",
                    jiage: "788"
                }
            ],
            ft: ["商品详情", "累计评价"],
            shang: ["https://img1.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_01(1)(2).jpg", "https://img1.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_02.jpg", "https://img1.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_09(1).jpg", "https://img1.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_08.jpg", "https://img1.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_07.jpg", "https://img2.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_06.jpg", "https://img2.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_05(1).jpg", "https://img2.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_04(1)(4).jpg", 'https://img1.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_03(1).jpg'],
            pjs: [{
                    name: "iL***********7",
                    dat: "（2019-04-23）",
                    pj: "很好吃哦，全家都很喜欢，两种口味，太棒了！",
                    pw: false,
                    ps: "快递包装好，送货小哥热情周到。"
                }, {
                    name: "依d*2",
                    dat: "（2019-04-22）",
                    pj: "味道一般",
                    pw: false,
                    ps: "快递包装好，送货小哥热情周到。"
                },
                {
                    name: "91**朱",
                    dat: "（2019-04-22）",
                    pj: "好吃美味的蛋糕，服务还超乎想象的好，深圳只有壹点壹客能做到。",
                    pw: true,
                    ps: "快递包装好，送货小哥热情周到。"
                },
                {
                    name: "*** ",
                    dat: "（2019-04-22）",
                    pj: "准时、口味好！",
                    pw: false,
                    ps: "快递包装好，送货小哥热情周到。"
                }, {
                    name: "***",
                    dat: "（2019-04-22）",
                    pj: "味道很棒",
                    pw: false,
                    ps: "快递包装好，送货小哥热情周到。"
                }, {
                    name: "LL***********5 ",
                    dat: "（2019-04-21）",
                    pj: "蛋糕很滑，浓浓的香味，很好吃，希望能在全国多开连锁店造福更多人",
                    pw: false,
                    ps: "快递包装好，送货小哥热情周到。"
                }, {
                    name: "***",
                    dat: "（2019-04-22）",
                    pj: "榴莲很好吃啊！还会再买哦！",
                    pw: false,
                    ps: "快递包装好，送货小哥热情周到。"
                }
            ]
        }]
    }, {
        Url: "https://img2.1date1cake.com/images/201809/thumb_img/61_thumb_G_1538292059222.jpg",
        name: "榴芒双拼",
        age: "198元/1.0磅",
        xx: "榴莲与芒果的经典双拼",
        gong: [{
            name: "榴芒双拼",
            gongurl: ["http://www.1date1cake.com/images/201804/goods_img/71_P_1523323819795.jpg", "http://www.1date1cake.com/images/201804/1523323287427417354.jpg"],
            gongName: "榴芒双拼DURIAN & MANGO",
            text: "你是“小清新”还是“重口味”？2011年，壹点壹客创作出“榴芒双拼”，一客满足你两种想象。清新芒果慕斯，当季的鲜芒果粒，颗颗明黄灿烂过南国阳光；霸道榴莲忘返，甜软果肉融合淡奶油、白巧，柔情蜜意让你欲罢不能。",
            data: "查看配送时间",
            shijianz:"12:50",
            shijianw:"21:00",
            fen: ["2~4人份", "5~8人份", "9~12人份", "15~20人份"],
            fena: [{
                    id: 0,
                    fenimg: "http://www.1date1cake.com/data/goods_attr/3/3ab1f998.jpg",
                    g: 1,
                    s: "512g（1.13磅)",
                    h: "5",
                    jiage: "198"
                },
                {
                    id: 1,
                    fenimg: "http://www.1date1cake.com/data/goods_attr/b/b17a6980.jpg",
                    g: 2,
                    s: "1058g（2.33磅）",
                    h: "10",
                    jiage: "338"
                },
                {
                    id: 2,
                    fenimg: "http://www.1date1cake.com/data/goods_attr/3/3785fe2f.jpg",
                    g: 3,
                    s: "1784g（3.93磅）",
                    h: "15",
                    jiage: "458"
                },
                {
                    id: 3,
                    fenimg: "http://www.1date1cake.com/data/goods_attr/f/fecd7de0.jpg",
                    g: 4,
                    s: "实重2270g（实重5磅）",
                    h: "25",
                    jiage: "788"
                }
            ],
            ft: ["商品详情", "累计评价"],
            shang: ["https://img1.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_01(1)(2).jpg", "https://img1.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_02.jpg", "https://img1.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_09(1).jpg", "https://img1.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_08.jpg", "https://img1.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_07.jpg", "https://img2.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_06.jpg", "https://img2.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_05(1).jpg", "https://img2.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_04(1)(4).jpg", 'https://img1.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_03(1).jpg'],
            pjs: [{
                    name: "iL***********7",
                    dat: "（2019-04-23）",
                    pj: "很好吃哦，全家都很喜欢，两种口味，太棒了！",
                    pw: false,
                    ps: "快递包装好，送货小哥热情周到。"
                }, {
                    name: "依d*2",
                    dat: "（2019-04-22）",
                    pj: "味道一般",
                    pw: false,
                    ps: "快递包装好，送货小哥热情周到。"
                },
                {
                    name: "91**朱",
                    dat: "（2019-04-22）",
                    pj: "好吃美味的蛋糕，服务还超乎想象的好，深圳只有壹点壹客能做到。",
                    pw: true,
                    ps: "快递包装好，送货小哥热情周到。"
                },
                {
                    name: "*** ",
                    dat: "（2019-04-22）",
                    pj: "准时、口味好！",
                    pw: false,
                    ps: "快递包装好，送货小哥热情周到。"
                }, {
                    name: "***",
                    dat: "（2019-04-22）",
                    pj: "味道很棒",
                    pw: false,
                    ps: "快递包装好，送货小哥热情周到。"
                }, {
                    name: "LL***********5 ",
                    dat: "（2019-04-21）",
                    pj: "蛋糕很滑，浓浓的香味，很好吃，希望能在全国多开连锁店造福更多人",
                    pw: false,
                    ps: "快递包装好，送货小哥热情周到。"
                }, {
                    name: "***",
                    dat: "（2019-04-22）",
                    pj: "榴莲很好吃啊！还会再买哦！",
                    pw: false,
                    ps: "快递包装好，送货小哥热情周到。"
                }
            ]
        }]
    }, {
        Url: "https://img2.1date1cake.com/images/201804/thumb_img/16_thumb_G_1522806861762.jpg",
        name: "榴芒双拼",
        age: "198元/1.0磅",
        xx: "榴莲与芒果的经典双拼",
        gong: [{
            name: "榴芒双拼",
            gongurl: ["http://www.1date1cake.com/images/201804/goods_img/71_P_1523323819795.jpg", "http://www.1date1cake.com/images/201804/1523323287427417354.jpg"],
            gongName: "榴芒双拼DURIAN & MANGO",
            text: "你是“小清新”还是“重口味”？2011年，壹点壹客创作出“榴芒双拼”，一客满足你两种想象。清新芒果慕斯，当季的鲜芒果粒，颗颗明黄灿烂过南国阳光；霸道榴莲忘返，甜软果肉融合淡奶油、白巧，柔情蜜意让你欲罢不能。",
            data: "查看配送时间",
            shijianz:"12:50",
            shijianw:"21:00",
            fen: ["2~4人份", "5~8人份", "9~12人份", "15~20人份"],
            fena: [{
                    id: 0,
                    fenimg: "http://www.1date1cake.com/data/goods_attr/3/3ab1f998.jpg",
                    g: 1,
                    s: "512g（1.13磅)",
                    h: "5",
                    jiage: "198"
                },
                {
                    id: 1,
                    fenimg: "http://www.1date1cake.com/data/goods_attr/b/b17a6980.jpg",
                    g: 2,
                    s: "1058g（2.33磅）",
                    h: "10",
                    jiage: "338"
                },
                {
                    id: 2,
                    fenimg: "http://www.1date1cake.com/data/goods_attr/3/3785fe2f.jpg",
                    g: 3,
                    s: "1784g（3.93磅）",
                    h: "15",
                    jiage: "458"
                },
                {
                    id: 3,
                    fenimg: "http://www.1date1cake.com/data/goods_attr/f/fecd7de0.jpg",
                    g: 4,
                    s: "实重2270g（实重5磅）",
                    h: "25",
                    jiage: "788"
                }
            ],
            ft: ["商品详情", "累计评价"],
            shang: ["https://img1.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_01(1)(2).jpg", "https://img1.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_02.jpg", "https://img1.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_09(1).jpg", "https://img1.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_08.jpg", "https://img1.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_07.jpg", "https://img2.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_06.jpg", "https://img2.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_05(1).jpg", "https://img2.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_04(1)(4).jpg", 'https://img1.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_03(1).jpg'],
            pjs: [{
                    name: "iL***********7",
                    dat: "（2019-04-23）",
                    pj: "很好吃哦，全家都很喜欢，两种口味，太棒了！",
                    pw: false,
                    ps: "快递包装好，送货小哥热情周到。"
                }, {
                    name: "依d*2",
                    dat: "（2019-04-22）",
                    pj: "味道一般",
                    pw: false,
                    ps: "快递包装好，送货小哥热情周到。"
                },
                {
                    name: "91**朱",
                    dat: "（2019-04-22）",
                    pj: "好吃美味的蛋糕，服务还超乎想象的好，深圳只有壹点壹客能做到。",
                    pw: true,
                    ps: "快递包装好，送货小哥热情周到。"
                },
                {
                    name: "*** ",
                    dat: "（2019-04-22）",
                    pj: "准时、口味好！",
                    pw: false,
                    ps: "快递包装好，送货小哥热情周到。"
                }, {
                    name: "***",
                    dat: "（2019-04-22）",
                    pj: "味道很棒",
                    pw: false,
                    ps: "快递包装好，送货小哥热情周到。"
                }, {
                    name: "LL***********5 ",
                    dat: "（2019-04-21）",
                    pj: "蛋糕很滑，浓浓的香味，很好吃，希望能在全国多开连锁店造福更多人",
                    pw: false,
                    ps: "快递包装好，送货小哥热情周到。"
                }, {
                    name: "***",
                    dat: "（2019-04-22）",
                    pj: "榴莲很好吃啊！还会再买哦！",
                    pw: false,
                    ps: "快递包装好，送货小哥热情周到。"
                }
            ]
        }]
    }, {
        Url: "https://img1.1date1cake.com/images/201904/thumb_img/821_thumb_G_1556187160468.jpg",
        name: "榴芒双拼",
        age: "198元/1.0磅",
        xx: "榴莲与芒果的经典双拼",
        gong: [{
            name: "榴芒双拼",
            gongurl: ["http://www.1date1cake.com/images/201804/goods_img/71_P_1523323819795.jpg", "http://www.1date1cake.com/images/201804/1523323287427417354.jpg"],
            gongName: "榴芒双拼DURIAN & MANGO",
            text: "你是“小清新”还是“重口味”？2011年，壹点壹客创作出“榴芒双拼”，一客满足你两种想象。清新芒果慕斯，当季的鲜芒果粒，颗颗明黄灿烂过南国阳光；霸道榴莲忘返，甜软果肉融合淡奶油、白巧，柔情蜜意让你欲罢不能。",
            data: "查看配送时间",
            shijianz:"12:50",
            shijianw:"21:00",
            fen: ["2~4人份", "5~8人份", "9~12人份", "15~20人份"],
            fena: [{
                    id: 0,
                    fenimg: "http://www.1date1cake.com/data/goods_attr/3/3ab1f998.jpg",
                    g: 1,
                    s: "512g（1.13磅)",
                    h: "5",
                    jiage: "198"
                },
                {
                    id: 1,
                    fenimg: "http://www.1date1cake.com/data/goods_attr/b/b17a6980.jpg",
                    g: 2,
                    s: "1058g（2.33磅）",
                    h: "10",
                    jiage: "338"
                },
                {
                    id: 2,
                    fenimg: "http://www.1date1cake.com/data/goods_attr/3/3785fe2f.jpg",
                    g: 3,
                    s: "1784g（3.93磅）",
                    h: "15",
                    jiage: "458"
                },
                {
                    id: 3,
                    fenimg: "http://www.1date1cake.com/data/goods_attr/f/fecd7de0.jpg",
                    g: 4,
                    s: "实重2270g（实重5磅）",
                    h: "25",
                    jiage: "788"
                }
            ],
            ft: ["商品详情", "累计评价"],
            shang: ["https://img1.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_01(1)(2).jpg", "https://img1.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_02.jpg", "https://img1.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_09(1).jpg", "https://img1.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_08.jpg", "https://img1.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_07.jpg", "https://img2.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_06.jpg", "https://img2.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_05(1).jpg", "https://img2.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_04(1)(4).jpg", 'https://img1.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_03(1).jpg'],
            pjs: [{
                    name: "iL***********7",
                    dat: "（2019-04-23）",
                    pj: "很好吃哦，全家都很喜欢，两种口味，太棒了！",
                    pw: false,
                    ps: "快递包装好，送货小哥热情周到。"
                }, {
                    name: "依d*2",
                    dat: "（2019-04-22）",
                    pj: "味道一般",
                    pw: false,
                    ps: "快递包装好，送货小哥热情周到。"
                },
                {
                    name: "91**朱",
                    dat: "（2019-04-22）",
                    pj: "好吃美味的蛋糕，服务还超乎想象的好，深圳只有壹点壹客能做到。",
                    pw: true,
                    ps: "快递包装好，送货小哥热情周到。"
                },
                {
                    name: "*** ",
                    dat: "（2019-04-22）",
                    pj: "准时、口味好！",
                    pw: false,
                    ps: "快递包装好，送货小哥热情周到。"
                }, {
                    name: "***",
                    dat: "（2019-04-22）",
                    pj: "味道很棒",
                    pw: false,
                    ps: "快递包装好，送货小哥热情周到。"
                }, {
                    name: "LL***********5 ",
                    dat: "（2019-04-21）",
                    pj: "蛋糕很滑，浓浓的香味，很好吃，希望能在全国多开连锁店造福更多人",
                    pw: false,
                    ps: "快递包装好，送货小哥热情周到。"
                }, {
                    name: "***",
                    dat: "（2019-04-22）",
                    pj: "榴莲很好吃啊！还会再买哦！",
                    pw: false,
                    ps: "快递包装好，送货小哥热情周到。"
                }
            ]
        }]
    }, {
        Url: "https://img1.1date1cake.com/images/201809/thumb_img/4_thumb_G_1538291729453.jpg",
        name: "榴芒双拼",
        age: "198元/1.0磅",
        xx: "榴莲与芒果的经典双拼",
        gong: [{
            name: "榴芒双拼",
            gongurl: ["http://www.1date1cake.com/images/201804/goods_img/71_P_1523323819795.jpg", "http://www.1date1cake.com/images/201804/1523323287427417354.jpg"],
            gongName: "榴芒双拼DURIAN & MANGO",
            text: "你是“小清新”还是“重口味”？2011年，壹点壹客创作出“榴芒双拼”，一客满足你两种想象。清新芒果慕斯，当季的鲜芒果粒，颗颗明黄灿烂过南国阳光；霸道榴莲忘返，甜软果肉融合淡奶油、白巧，柔情蜜意让你欲罢不能。",
            data: "查看配送时间",
            shijianz:"12:50",
            shijianw:"21:00",
            fen: ["2~4人份", "5~8人份", "9~12人份", "15~20人份"],
            fena: [{
                    id: 0,
                    fenimg: "http://www.1date1cake.com/data/goods_attr/3/3ab1f998.jpg",
                    g: 1,
                    s: "512g（1.13磅)",
                    h: "5",
                    jiage: "198"
                },
                {
                    id: 1,
                    fenimg: "http://www.1date1cake.com/data/goods_attr/b/b17a6980.jpg",
                    g: 2,
                    s: "1058g（2.33磅）",
                    h: "10",
                    jiage: "338"
                },
                {
                    id: 2,
                    fenimg: "http://www.1date1cake.com/data/goods_attr/3/3785fe2f.jpg",
                    g: 3,
                    s: "1784g（3.93磅）",
                    h: "15",
                    jiage: "458"
                },
                {
                    id: 3,
                    fenimg: "http://www.1date1cake.com/data/goods_attr/f/fecd7de0.jpg",
                    g: 4,
                    s: "实重2270g（实重5磅）",
                    h: "25",
                    jiage: "788"
                }
            ],
            ft: ["商品详情", "累计评价"],
            shang: ["https://img1.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_01(1)(2).jpg", "https://img1.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_02.jpg", "https://img1.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_09(1).jpg", "https://img1.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_08.jpg", "https://img1.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_07.jpg", "https://img2.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_06.jpg", "https://img2.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_05(1).jpg", "https://img2.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_04(1)(4).jpg", 'https://img1.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_03(1).jpg'],
            pjs: [{
                    name: "iL***********7",
                    dat: "（2019-04-23）",
                    pj: "很好吃哦，全家都很喜欢，两种口味，太棒了！",
                    pw: false,
                    ps: "快递包装好，送货小哥热情周到。"
                }, {
                    name: "依d*2",
                    dat: "（2019-04-22）",
                    pj: "味道一般",
                    pw: false,
                    ps: "快递包装好，送货小哥热情周到。"
                },
                {
                    name: "91**朱",
                    dat: "（2019-04-22）",
                    pj: "好吃美味的蛋糕，服务还超乎想象的好，深圳只有壹点壹客能做到。",
                    pw: true,
                    ps: "快递包装好，送货小哥热情周到。"
                },
                {
                    name: "*** ",
                    dat: "（2019-04-22）",
                    pj: "准时、口味好！",
                    pw: false,
                    ps: "快递包装好，送货小哥热情周到。"
                }, {
                    name: "***",
                    dat: "（2019-04-22）",
                    pj: "味道很棒",
                    pw: false,
                    ps: "快递包装好，送货小哥热情周到。"
                }, {
                    name: "LL***********5 ",
                    dat: "（2019-04-21）",
                    pj: "蛋糕很滑，浓浓的香味，很好吃，希望能在全国多开连锁店造福更多人",
                    pw: false,
                    ps: "快递包装好，送货小哥热情周到。"
                }, {
                    name: "***",
                    dat: "（2019-04-22）",
                    pj: "榴莲很好吃啊！还会再买哦！",
                    pw: false,
                    ps: "快递包装好，送货小哥热情周到。"
                }
            ]
        }]
    }, {
        Url: "https://img2.1date1cake.com/images/201812/thumb_img/759_thumb_G_1545271919538.jpg",
        name: "榴芒双拼",
        age: "198元/1.0磅",
        xx: "榴莲与芒果的经典双拼",
        gong: [{
            name: "榴芒双拼",
            gongurl: ["http://www.1date1cake.com/images/201804/goods_img/71_P_1523323819795.jpg", "http://www.1date1cake.com/images/201804/1523323287427417354.jpg"],
            gongName: "榴芒双拼DURIAN & MANGO",
            text: "你是“小清新”还是“重口味”？2011年，壹点壹客创作出“榴芒双拼”，一客满足你两种想象。清新芒果慕斯，当季的鲜芒果粒，颗颗明黄灿烂过南国阳光；霸道榴莲忘返，甜软果肉融合淡奶油、白巧，柔情蜜意让你欲罢不能。",
            data: "查看配送时间",
            shijianz:"12:50",
            shijianw:"21:00",
            fen: ["2~4人份", "5~8人份", "9~12人份", "15~20人份"],
            fena: [{
                    id: 0,
                    fenimg: "http://www.1date1cake.com/data/goods_attr/3/3ab1f998.jpg",
                    g: 1,
                    s: "512g（1.13磅)",
                    h: "5",
                    jiage: "198"
                },
                {
                    id: 1,
                    fenimg: "http://www.1date1cake.com/data/goods_attr/b/b17a6980.jpg",
                    g: 2,
                    s: "1058g（2.33磅）",
                    h: "10",
                    jiage: "338"
                },
                {
                    id: 2,
                    fenimg: "http://www.1date1cake.com/data/goods_attr/3/3785fe2f.jpg",
                    g: 3,
                    s: "1784g（3.93磅）",
                    h: "15",
                    jiage: "458"
                },
                {
                    id: 3,
                    fenimg: "http://www.1date1cake.com/data/goods_attr/f/fecd7de0.jpg",
                    g: 4,
                    s: "实重2270g（实重5磅）",
                    h: "25",
                    jiage: "788"
                }
            ],
            ft: ["商品详情", "累计评价"],
            shang: ["https://img1.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_01(1)(2).jpg", "https://img1.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_02.jpg", "https://img1.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_09(1).jpg", "https://img1.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_08.jpg", "https://img1.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_07.jpg", "https://img2.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_06.jpg", "https://img2.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_05(1).jpg", "https://img2.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_04(1)(4).jpg", 'https://img1.1date1cake.com//images/upload/Image/%E6%A6%B4%E8%8A%92%E5%8F%8C%E6%8B%BC%E8%AF%A6%E6%83%85pc_03(1).jpg'],
            pjs: [{
                    name: "iL***********7",
                    dat: "（2019-04-23）",
                    pj: "很好吃哦，全家都很喜欢，两种口味，太棒了！",
                    pw: false,
                    ps: "快递包装好，送货小哥热情周到。"
                }, {
                    name: "依d*2",
                    dat: "（2019-04-22）",
                    pj: "味道一般",
                    pw: false,
                    ps: "快递包装好，送货小哥热情周到。"
                },
                {
                    name: "91**朱",
                    dat: "（2019-04-22）",
                    pj: "好吃美味的蛋糕，服务还超乎想象的好，深圳只有壹点壹客能做到。",
                    pw: true,
                    ps: "快递包装好，送货小哥热情周到。"
                },
                {
                    name: "*** ",
                    dat: "（2019-04-22）",
                    pj: "准时、口味好！",
                    pw: false,
                    ps: "快递包装好，送货小哥热情周到。"
                }, {
                    name: "***",
                    dat: "（2019-04-22）",
                    pj: "味道很棒",
                    pw: false,
                    ps: "快递包装好，送货小哥热情周到。"
                }, {
                    name: "LL***********5 ",
                    dat: "（2019-04-21）",
                    pj: "蛋糕很滑，浓浓的香味，很好吃，希望能在全国多开连锁店造福更多人",
                    pw: false,
                    ps: "快递包装好，送货小哥热情周到。"
                }, {
                    name: "***",
                    dat: "（2019-04-22）",
                    pj: "榴莲很好吃啊！还会再买哦！",
                    pw: false,
                    ps: "快递包装好，送货小哥热情周到。"
                }
            ]
        }]
    }]
    // res.render(a);
    res.send(b)
});
router.get('/z', function(req, res, next) {
   let quanbu=[
        {
            "Stagename":"榴芒双拼",
            "Url":"https://img2.1date1cake.com/images/201804/thumb_img/71_thumb_G_1523323288653.jpg",
            "Price":"198元/1.0磅",
            "Name":"榴莲与芒果的经典双拼"
        },
        {
            "Stagename":"芒莓二重奏",
            "Url":"https://img1.1date1cake.com/images/201708/thumb_img/474_thumb_G_1501659151453.jpg",
            "Price":"198元/1.0磅",
            "Name":"蓝莓红丝绒蛋糕"
        },
        {
            "Stagename":"草莓公主",
            "Url":"https://img2.1date1cake.com/images/201903/thumb_img/342_thumb_G_1552012281479.jpg",
            "Price":"198元/1.0磅",
            "Name":"草莓奶油蛋糕"
        },
        {
            "Stagename":"榴芒双拼",
            "Url":"https://img2.1date1cake.com/images/201804/thumb_img/71_thumb_G_1523323288653.jpg",
            "Price":"198元/1.0磅",
            "Name":"榴莲与芒果的经典双拼"
        },
        {
            "Stagename":"芒莓二重奏",
            "Url":"https://img1.1date1cake.com/images/201708/thumb_img/474_thumb_G_1501659151453.jpg",
            "Price":"198元/1.0磅",
            "Name":"蓝莓红丝绒蛋糕"
        },
        {
            "Stagename":"草莓公主",
            "Url":"https://img2.1date1cake.com/images/201903/thumb_img/342_thumb_G_1552012281479.jpg",
            "Price":"198元/1.0磅",
            "Name":"草莓奶油蛋糕"
        },
        {
            "Stagename":"榴芒双拼",
            "Url":"https://img2.1date1cake.com/images/201804/thumb_img/71_thumb_G_1523323288653.jpg",
            "Price":"198元/1.0磅",
            "Name":"榴莲与芒果的经典双拼"
        },
        {
            "Stagename":"芒莓二重奏",
            "Url":"https://img1.1date1cake.com/images/201708/thumb_img/474_thumb_G_1501659151453.jpg",
            "Price":"198元/1.0磅",
            "Name":"蓝莓红丝绒蛋糕"
        },
        {
            "Stagename":"草莓公主",
            "Url":"https://img2.1date1cake.com/images/201903/thumb_img/342_thumb_G_1552012281479.jpg",
            "Price":"198元/1.0磅",
            "Name":"草莓奶油蛋糕"
        }
    ]
    
 
    res.send(quanbu)
});
router.get('/x', function(req, res, next) {
    let zhoubian=[
        {
            "Stagename":"生日场景大礼包（含五套餐位小包）",
            "Url":"https://img1.1date1cake.com/images/201904/thumb_img/464_thumb_G_1555466678002.jpg",
            "Price":"128元	/套",
        },
        {
            "Stagename":"儿童餐位小包（一位）",
            "Url":"https://img1.1date1cake.com/images/201801/thumb_img/463_thumb_G_1515740311482.jpg",
            "Price":"30元	/套",
        },
        {
            "Stagename":"甜蜜蛋糕-气球装饰套餐",
            "Url":"https://img1.1date1cake.com/images/201809/thumb_img/708_thumb_G_1538208598410.jpg",
            "Price":"68元",
        },
        {
            "Stagename":"宝宝百日宴-气球装饰套餐",
            "Url":"https://img1.1date1cake.com/images/201809/thumb_img/703_thumb_G_1538208671105.jpg",
            "Price":"68元",
        },
        {
            "Stagename":"福寿天齐-气球装饰套餐",
            "Url":"https://img2.1date1cake.com/images/201809/thumb_img/706_thumb_G_1538208627486.jpg",
            "Price":"68元",
        },
        {
            "Stagename":"壹点壹客数字蜡烛",
            "Url":"https://img1.1date1cake.com/images/201901/thumb_img/139_thumb_G_1547806530670.jpg",
            "Price":"5元	/支",
        }
    ]

    // res.render(a);
    res.send(zhoubian)
});
module.exports = router;