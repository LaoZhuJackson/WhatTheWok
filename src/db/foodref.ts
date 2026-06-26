// 自动生成自 china-food-composition-data（中国食物成分表第6版）
// 生成时间：2026-06-26
// 共 1457 种食材

import { db } from './database'
import type { FoodReference } from '../models'

const SEED_DATA: FoodReference[] = [
    {
        "name": "阿胶",
        "kcalPer100": 383,
        "proteinPer100": 73,
        "carbsPer100": 9.5,
        "fatPer100": 5.8
    },
    {
        "name": "螯虾",
        "kcalPer100": 93,
        "proteinPer100": 14.8,
        "carbsPer100": 0,
        "fatPer100": 3.8
    },
    {
        "name": "澳田脱脂牛奶)",
        "kcalPer100": 35,
        "proteinPer100": 3.7,
        "carbsPer100": 4.3,
        "fatPer100": 0.3
    },
    {
        "name": "扒鸡",
        "kcalPer100": 217,
        "proteinPer100": 29.6,
        "carbsPer100": 0,
        "fatPer100": 11
    },
    {
        "name": "扒猪脸",
        "kcalPer100": 347,
        "proteinPer100": 18.8,
        "carbsPer100": 1.4,
        "fatPer100": 29.6
    },
    {
        "name": "芭蕉",
        "kcalPer100": 115,
        "proteinPer100": 1.2,
        "carbsPer100": 28.9,
        "fatPer100": 0.1,
        "aliases": [
            "甘蕉",
            "板蕉",
            "牙蕉"
        ]
    },
    {
        "name": "白(鲜)",
        "kcalPer100": 124,
        "proteinPer100": 3.4,
        "carbsPer100": 27.1,
        "fatPer100": 0.4,
        "aliases": [
            "小根蒜",
            "山蒜",
            "团蒜"
        ]
    },
    {
        "name": "白菜（脱水）",
        "kcalPer100": 305,
        "proteinPer100": 6.2,
        "carbsPer100": 72.9,
        "fatPer100": 0.8
    },
    {
        "name": "白菜墓",
        "kcalPer100": 28,
        "proteinPer100": 2.8,
        "carbsPer100": 4,
        "fatPer100": 0.5,
        "aliases": [
            "菜墓",
            "菜心"
        ]
    },
    {
        "name": "白粉桃",
        "kcalPer100": 26,
        "proteinPer100": 1.3,
        "carbsPer100": 5.5,
        "fatPer100": 0.1
    },
    {
        "name": "白凤菜",
        "kcalPer100": 16,
        "proteinPer100": 1.6,
        "carbsPer100": 4,
        "fatPer100": 0.2
    },
    {
        "name": "白姑鱼",
        "kcalPer100": 150,
        "proteinPer100": 19.1,
        "carbsPer100": 0,
        "fatPer100": 8.2,
        "aliases": [
            "白米子(鱼）"
        ]
    },
    {
        "name": "白瓜",
        "kcalPer100": 12,
        "proteinPer100": 0.9,
        "carbsPer100": 0.9,
        "fatPer100": 2.6
    },
    {
        "name": "白果(干)",
        "kcalPer100": 355,
        "proteinPer100": 13.2,
        "carbsPer100": 72.6,
        "fatPer100": 1.3,
        "aliases": [
            "银杏"
        ]
    },
    {
        "name": "白兰瓜",
        "kcalPer100": 23,
        "proteinPer100": 0.6,
        "carbsPer100": 5.3,
        "fatPer100": 0.1
    },
    {
        "name": "白萝卜 (圆)",
        "kcalPer100": 16,
        "proteinPer100": 0.7,
        "carbsPer100": 3.6,
        "fatPer100": 0.2
    },
    {
        "name": "白萝卜（鲜）[莱]",
        "kcalPer100": 16,
        "proteinPer100": 0.7,
        "carbsPer100": 4,
        "fatPer100": 0.1
    },
    {
        "name": "白米虾",
        "kcalPer100": 81,
        "proteinPer100": 17.3,
        "carbsPer100": 2,
        "fatPer100": 0.4,
        "aliases": [
            "水虾米"
        ]
    },
    {
        "name": "白蘑菇",
        "kcalPer100": 29,
        "proteinPer100": 3.5,
        "carbsPer100": 3.8,
        "fatPer100": 0.4,
        "aliases": [
            "双孢蘑菇",
            "洋蘑菇"
        ]
    },
    {
        "name": "白沙蒿（鲜）",
        "kcalPer100": 232,
        "proteinPer100": 4.3,
        "carbsPer100": 8.5,
        "fatPer100": 0.9,
        "aliases": [
            "沙蒿"
        ]
    },
    {
        "name": "白薯叶（鲜）",
        "kcalPer100": 249,
        "proteinPer100": 4.8,
        "carbsPer100": 9,
        "fatPer100": 0.7,
        "aliases": [
            "甘薯叶"
        ]
    },
    {
        "name": "白笋 (干)",
        "kcalPer100": 282,
        "proteinPer100": 26,
        "carbsPer100": 57.1,
        "fatPer100": 4
    },
    {
        "name": "白条鱼 （裸鱼）",
        "kcalPer100": 103,
        "proteinPer100": 16.6,
        "carbsPer100": 1.6,
        "fatPer100": 3.3
    },
    {
        "name": "百合 (脱水)",
        "kcalPer100": 346,
        "proteinPer100": 8.1,
        "carbsPer100": 79.1,
        "fatPer100": 0.1
    },
    {
        "name": "百合(鲜)",
        "kcalPer100": 166,
        "proteinPer100": 3.2,
        "carbsPer100": 38.8,
        "fatPer100": 0.1
    },
    {
        "name": "败酱（鲜）",
        "kcalPer100": 290,
        "proteinPer100": 1.5,
        "carbsPer100": 17.3,
        "fatPer100": 1,
        "aliases": [
            "胭脂麻"
        ]
    },
    {
        "name": "斑节对虾",
        "kcalPer100": 103,
        "proteinPer100": 18.6,
        "carbsPer100": 5.4,
        "fatPer100": 0.8,
        "aliases": [
            "草虾"
        ]
    },
    {
        "name": "瓣鱼",
        "kcalPer100": 117,
        "proteinPer100": 19.9,
        "carbsPer100": 0,
        "fatPer100": 4.2,
        "aliases": [
            "桂鱼",
            "花鲫鱼"
        ]
    },
    {
        "name": "抱子甘蓝",
        "kcalPer100": 36,
        "proteinPer100": 3.5,
        "carbsPer100": 8.8,
        "fatPer100": 0.2,
        "aliases": [
            "小圆白菜"
        ]
    },
    {
        "name": "鲍鱼",
        "kcalPer100": 84,
        "proteinPer100": 12.6,
        "carbsPer100": 6.6,
        "fatPer100": 0.8,
        "aliases": [
            "杂色鲍"
        ]
    },
    {
        "name": "鲍鱼 (干)",
        "kcalPer100": 322,
        "proteinPer100": 54.1,
        "carbsPer100": 13.7,
        "fatPer100": 5.6
    },
    {
        "name": "鲍鱼 (皱纹鲍)",
        "kcalPer100": 75,
        "proteinPer100": 13.7,
        "carbsPer100": 4.8,
        "fatPer100": 0.1
    },
    {
        "name": "北风菌",
        "kcalPer100": 17,
        "proteinPer100": 1.7,
        "carbsPer100": 2.9,
        "fatPer100": 0.1,
        "aliases": [
            "荷叶离褶伞",
            "一窝羊"
        ]
    },
    {
        "name": "北极虾",
        "kcalPer100": 132,
        "proteinPer100": 14.9,
        "carbsPer100": 15.4,
        "fatPer100": 1.2
    },
    {
        "name": "北京烤鸭",
        "kcalPer100": 436,
        "proteinPer100": 16.6,
        "carbsPer100": 6,
        "fatPer100": 38.4
    },
    {
        "name": "北京填鸭",
        "kcalPer100": 425,
        "proteinPer100": 9.3,
        "carbsPer100": 3.9,
        "fatPer100": 41.3
    },
    {
        "name": "荸荠（鲜）",
        "kcalPer100": 61,
        "proteinPer100": 1.2,
        "carbsPer100": 14.2,
        "fatPer100": 0.2,
        "aliases": [
            "马蹄",
            "地栗"
        ]
    },
    {
        "name": "编鱼",
        "kcalPer100": 135,
        "proteinPer100": 18.3,
        "carbsPer100": 1.2,
        "fatPer100": 6.3,
        "aliases": [
            "鲂鱼",
            "武昌鱼"
        ]
    },
    {
        "name": "蝙鱼",
        "kcalPer100": 142,
        "proteinPer100": 27,
        "carbsPer100": 0.7,
        "fatPer100": 3.5,
        "aliases": [
            "鲂鱼",
            "武昌鱼"
        ]
    },
    {
        "name": "扁豆",
        "kcalPer100": 41,
        "proteinPer100": 2.7,
        "carbsPer100": 8.2,
        "fatPer100": 0.2,
        "aliases": [
            "月亮菜"
        ]
    },
    {
        "name": "扁豆",
        "kcalPer100": 32,
        "proteinPer100": 2.3,
        "carbsPer100": 7.4,
        "fatPer100": 0.2
    },
    {
        "name": "扁豆 (干，白)",
        "kcalPer100": 283,
        "proteinPer100": 19,
        "carbsPer100": 55.6,
        "fatPer100": 1.3
    },
    {
        "name": "扁豆 (干)",
        "kcalPer100": 339,
        "proteinPer100": 25.3,
        "carbsPer100": 61.9,
        "fatPer100": 0.4
    },
    {
        "name": "扁蓄菜（鲜）",
        "kcalPer100": 313,
        "proteinPer100": 6,
        "carbsPer100": 12.4,
        "fatPer100": 0.6,
        "aliases": [
            "竹节草"
        ]
    },
    {
        "name": "饼干（伊威全机能字母宝宝 营养饼干)",
        "kcalPer100": 507,
        "proteinPer100": 8.5,
        "carbsPer100": 65.5,
        "fatPer100": 23.5
    },
    {
        "name": "菠菜(脱水）",
        "kcalPer100": 308,
        "proteinPer100": 6.4,
        "carbsPer100": 75.7,
        "fatPer100": 0.6
    },
    {
        "name": "菠菜（鲜）",
        "kcalPer100": 28,
        "proteinPer100": 2.6,
        "carbsPer100": 4.5,
        "fatPer100": 0.3,
        "aliases": [
            "赤根菜"
        ]
    },
    {
        "name": "菠萝",
        "kcalPer100": 44,
        "proteinPer100": 0.5,
        "carbsPer100": 10.8,
        "fatPer100": 0.1,
        "aliases": [
            "凤梨",
            "地菠萝"
        ]
    },
    {
        "name": "菠萝蜜",
        "kcalPer100": 164,
        "proteinPer100": 4.9,
        "carbsPer100": 36.7,
        "fatPer100": 0.3
    },
    {
        "name": "菠萝蜜",
        "kcalPer100": 105,
        "proteinPer100": 0.2,
        "carbsPer100": 25.7,
        "fatPer100": 0.3,
        "aliases": [
            "木菠萝"
        ]
    },
    {
        "name": "菜",
        "kcalPer100": 19,
        "proteinPer100": 2.2,
        "carbsPer100": 4,
        "fatPer100": 0.2,
        "aliases": [
            "空心菜",
            "藤藤菜"
        ]
    },
    {
        "name": "菜瓜",
        "kcalPer100": 19,
        "proteinPer100": 0.6,
        "carbsPer100": 0.4,
        "fatPer100": 3.9,
        "aliases": [
            "生瓜",
            "白瓜"
        ]
    },
    {
        "name": "菜花（白色）",
        "kcalPer100": 20,
        "proteinPer100": 1.7,
        "carbsPer100": 4.2,
        "fatPer100": 0.2,
        "aliases": [
            "花椰菜"
        ]
    },
    {
        "name": "菜花（脱水）",
        "kcalPer100": 312,
        "proteinPer100": 6.5,
        "carbsPer100": 76.8,
        "fatPer100": 0.6,
        "aliases": [
            "脱水花椰菜"
        ]
    },
    {
        "name": "蚕豆 (带皮)",
        "kcalPer100": 326,
        "proteinPer100": 24.6,
        "carbsPer100": 59.9,
        "fatPer100": 1.1
    },
    {
        "name": "蚕豆 (烤)",
        "kcalPer100": 377,
        "proteinPer100": 27,
        "carbsPer100": 63.8,
        "fatPer100": 2
    },
    {
        "name": "蚕豆 (鲜)",
        "kcalPer100": 111,
        "proteinPer100": 8.8,
        "carbsPer100": 19.5,
        "fatPer100": 0.4
    },
    {
        "name": "蚕豆 (煮)",
        "kcalPer100": 62,
        "proteinPer100": 4.8,
        "carbsPer100": 10.1,
        "fatPer100": 0.5
    },
    {
        "name": "蚕豆（干）",
        "kcalPer100": 338,
        "proteinPer100": 21.6,
        "carbsPer100": 61.5,
        "fatPer100": 1
    },
    {
        "name": "蚕豆（去皮）",
        "kcalPer100": 347,
        "proteinPer100": 25.4,
        "carbsPer100": 58.9,
        "fatPer100": 1.6
    },
    {
        "name": "蚕豆（炸）",
        "kcalPer100": 447,
        "proteinPer100": 26.7,
        "carbsPer100": 40.4,
        "fatPer100": 20,
        "aliases": [
            "开花豆"
        ]
    },
    {
        "name": "糙米",
        "kcalPer100": 348,
        "proteinPer100": 7.7,
        "carbsPer100": 75,
        "fatPer100": 2.7
    },
    {
        "name": "草菇",
        "kcalPer100": 27,
        "proteinPer100": 2.7,
        "carbsPer100": 1.6,
        "fatPer100": 4.3,
        "aliases": [
            "大黑头细花草",
            "稻菇"
        ]
    },
    {
        "name": "草莓",
        "kcalPer100": 32,
        "proteinPer100": 1,
        "carbsPer100": 7.1,
        "fatPer100": 0.2,
        "aliases": [
            "洋莓",
            "凤阳草莓"
        ]
    },
    {
        "name": "草鱼",
        "kcalPer100": 113,
        "proteinPer100": 16.6,
        "carbsPer100": 0,
        "fatPer100": 5.2,
        "aliases": [
            "鱼",
            "淡水鱼"
        ]
    },
    {
        "name": "草鱼",
        "kcalPer100": 96,
        "proteinPer100": 17.7,
        "carbsPer100": 0.5,
        "fatPer100": 2.6,
        "aliases": [
            "白鲩",
            "草包鱼",
            "鱼",
            "淡水鱼"
        ]
    },
    {
        "name": "草鱼 (熏)",
        "kcalPer100": 283,
        "proteinPer100": 24,
        "carbsPer100": 9.6,
        "fatPer100": 16.5
    },
    {
        "name": "叉烧肉",
        "kcalPer100": 196,
        "proteinPer100": 20.9,
        "carbsPer100": 6,
        "fatPer100": 9.8
    },
    {
        "name": "茶肠",
        "kcalPer100": 329,
        "proteinPer100": 9,
        "carbsPer100": 6.7,
        "fatPer100": 29.6
    },
    {
        "name": "茶树菇(干)柱状田头菇、油茶菇]",
        "kcalPer100": 309,
        "proteinPer100": 23.1,
        "carbsPer100": 56.1,
        "fatPer100": 2.6
    },
    {
        "name": "朝鲜蓟 (鲜)",
        "kcalPer100": 226,
        "proteinPer100": 2.7,
        "carbsPer100": 10.9,
        "fatPer100": 0.2
    },
    {
        "name": "晨曦脱脂纯牛奶）",
        "kcalPer100": 39,
        "proteinPer100": 3.5,
        "carbsPer100": 5.5,
        "fatPer100": 0.3
    },
    {
        "name": "蛏干",
        "kcalPer100": 340,
        "proteinPer100": 46.5,
        "carbsPer100": 27.4,
        "fatPer100": 4.9,
        "aliases": [
            "蛏子缢",
            "蛏青子"
        ]
    },
    {
        "name": "蛏子",
        "kcalPer100": 40,
        "proteinPer100": 7.3,
        "carbsPer100": 2.1,
        "fatPer100": 0.3
    },
    {
        "name": "蛏子 (焯)",
        "kcalPer100": 67,
        "proteinPer100": 13.5,
        "carbsPer100": 1.1,
        "fatPer100": 0.9
    },
    {
        "name": "赤贝",
        "kcalPer100": 61,
        "proteinPer100": 13.9,
        "carbsPer100": 0,
        "fatPer100": 0.6
    },
    {
        "name": "赤小豆（千）",
        "kcalPer100": 324,
        "proteinPer100": 20.2,
        "carbsPer100": 63.4,
        "fatPer100": 0.6,
        "aliases": [
            "小豆",
            "红小豆"
        ]
    },
    {
        "name": "赤眼鳟",
        "kcalPer100": 109,
        "proteinPer100": 18.1,
        "carbsPer100": 0,
        "fatPer100": 4.1,
        "aliases": [
            "金目鱼"
        ]
    },
    {
        "name": "春笋 (鲜)",
        "kcalPer100": 25,
        "proteinPer100": 2.4,
        "carbsPer100": 5.1,
        "fatPer100": 0.1
    },
    {
        "name": "纯牛奶 (代表值，低脂)",
        "kcalPer100": 47,
        "proteinPer100": 3.5,
        "carbsPer100": 4.8,
        "fatPer100": 1.5,
        "aliases": [
            "纯牛奶"
        ],
        "unitWeight": 250,
        "unitName": "ml"
    },
    {
        "name": "纯牛奶 (全脂，花园牌)",
        "kcalPer100": 57,
        "proteinPer100": 2.9,
        "carbsPer100": 4,
        "fatPer100": 3.3
    },
    {
        "name": "纯牛奶 (全脂，美国牛)",
        "kcalPer100": 59,
        "proteinPer100": 2.9,
        "carbsPer100": 4.6,
        "fatPer100": 3.2
    },
    {
        "name": "纯牛奶 (全脂，蒙牛牌)",
        "kcalPer100": 67,
        "proteinPer100": 3.1,
        "carbsPer100": 5.3,
        "fatPer100": 3.7
    },
    {
        "name": "纯牛奶 (全脂，帕玛拉特)",
        "kcalPer100": 61,
        "proteinPer100": 2.9,
        "carbsPer100": 5.1,
        "fatPer100": 3.2
    },
    {
        "name": "纯牛奶 (全脂，西域春牌)",
        "kcalPer100": 59,
        "proteinPer100": 2.9,
        "carbsPer100": 4.8,
        "fatPer100": 3.1
    },
    {
        "name": "纯牛奶 (全脂，伊利牌)",
        "kcalPer100": 68,
        "proteinPer100": 3.2,
        "carbsPer100": 5.4,
        "fatPer100": 3.7
    },
    {
        "name": "纯牛奶（代表值，全脂）",
        "kcalPer100": 65,
        "proteinPer100": 3.3,
        "carbsPer100": 4.9,
        "fatPer100": 3.6,
        "aliases": [
            "纯牛奶"
        ],
        "unitWeight": 250,
        "unitName": "ml"
    },
    {
        "name": "纯牛奶（低脂，澳大利亚 德运部分脱脂纯牛奶)",
        "kcalPer100": 51,
        "proteinPer100": 3.3,
        "carbsPer100": 5,
        "fatPer100": 2
    },
    {
        "name": "纯牛奶（低脂，德国艾德 牧牌部分脱脂纯牛奶)",
        "kcalPer100": 45,
        "proteinPer100": 3.5,
        "carbsPer100": 3.8,
        "fatPer100": 1.7
    },
    {
        "name": "纯牛奶（低脂，蒙牛特仑 苏低脂牛奶)",
        "kcalPer100": 48,
        "proteinPer100": 3.8,
        "carbsPer100": 5.2,
        "fatPer100": 1.3
    },
    {
        "name": "纯牛奶（低脂，明治醇壹 低脂肪高温杀菌乳）",
        "kcalPer100": 46,
        "proteinPer100": 3.6,
        "carbsPer100": 5.2,
        "fatPer100": 1.2
    },
    {
        "name": "纯牛奶（低脂，帕玛拉特）",
        "kcalPer100": 43,
        "proteinPer100": 2.9,
        "carbsPer100": 5,
        "fatPer100": 1.3
    },
    {
        "name": "纯牛奶（低脂，新西兰安 佳低脂牛奶)",
        "kcalPer100": 51,
        "proteinPer100": 3.8,
        "carbsPer100": 5.5,
        "fatPer100": 1.5
    },
    {
        "name": "纯牛奶（低脂，新西兰恒 天然田园低脂牛奶）",
        "kcalPer100": 45,
        "proteinPer100": 3.7,
        "carbsPer100": 3.8,
        "fatPer100": 1.7
    },
    {
        "name": "纯牛奶（全脂，爱尔兰金 凯利全脂牛奶)",
        "kcalPer100": 62,
        "proteinPer100": 3.2,
        "carbsPer100": 4.1,
        "fatPer100": 3.6
    },
    {
        "name": "纯牛奶（全脂，澳大利亚 澳田纯牛奶）",
        "kcalPer100": 62,
        "proteinPer100": 3.6,
        "carbsPer100": 3.9,
        "fatPer100": 3.5
    },
    {
        "name": "纯牛奶（全脂，比利时纯 牧牛奶)",
        "kcalPer100": 61,
        "proteinPer100": 3.5,
        "carbsPer100": 4,
        "fatPer100": 3.4
    },
    {
        "name": "纯牛奶（全脂，波兰美波 全脂纯牛奶）",
        "kcalPer100": 75,
        "proteinPer100": 3.2,
        "carbsPer100": 7.8,
        "fatPer100": 3.4
    },
    {
        "name": "纯牛奶（全脂，丹麦爱氏 晨曦有机全脂牛奶)",
        "kcalPer100": 67,
        "proteinPer100": 3.5,
        "carbsPer100": 5.2,
        "fatPer100": 3.6
    },
    {
        "name": "纯牛奶（全脂，德国爱氏 晨曦纯牛奶)",
        "kcalPer100": 68,
        "proteinPer100": 3.4,
        "carbsPer100": 5.5,
        "fatPer100": 3.6
    },
    {
        "name": "纯牛奶（全脂，德国甘蒂 牧场纯牛奶）",
        "kcalPer100": 64,
        "proteinPer100": 3.3,
        "carbsPer100": 4.7,
        "fatPer100": 3.6
    },
    {
        "name": "纯牛奶（全脂，德国牛）",
        "kcalPer100": 60,
        "proteinPer100": 3.1,
        "carbsPer100": 5.1,
        "fatPer100": 3
    },
    {
        "name": "纯牛奶（全脂，法国得乐 思全脂牛奶)",
        "kcalPer100": 64,
        "proteinPer100": 3.7,
        "carbsPer100": 4.3,
        "fatPer100": 3.6
    },
    {
        "name": "纯牛奶(全脂,光明纯牛奶)",
        "kcalPer100": 60,
        "proteinPer100": 3.4,
        "carbsPer100": 4,
        "fatPer100": 3.4
    },
    {
        "name": "纯牛奶(全脂，光明牌)",
        "kcalPer100": 61,
        "proteinPer100": 3.1,
        "carbsPer100": 5,
        "fatPer100": 3.2
    },
    {
        "name": "纯牛奶（全脂，光明优+ 高品质纯牛奶)",
        "kcalPer100": 67,
        "proteinPer100": 3.6,
        "carbsPer100": 4.5,
        "fatPer100": 3.8
    },
    {
        "name": "纯牛奶（全脂，广泽澳醇 纯牛奶）",
        "kcalPer100": 63,
        "proteinPer100": 3.5,
        "carbsPer100": 4.1,
        "fatPer100": 3.6
    },
    {
        "name": "纯牛奶(全脂,辉山纯牛奶)",
        "kcalPer100": 66,
        "proteinPer100": 3.5,
        "carbsPer100": 4.7,
        "fatPer100": 3.7
    },
    {
        "name": "纯牛奶（全脂，乐百氏牌）",
        "kcalPer100": 67,
        "proteinPer100": 3.3,
        "carbsPer100": 4.8,
        "fatPer100": 3.8
    },
    {
        "name": "纯牛奶（全脂，龙丹牌)",
        "kcalPer100": 66,
        "proteinPer100": 2.9,
        "carbsPer100": 5.1,
        "fatPer100": 3.8
    },
    {
        "name": "纯牛奶（全脂，龙丹松花 江牧场纯牛奶)",
        "kcalPer100": 67,
        "proteinPer100": 3.6,
        "carbsPer100": 4.8,
        "fatPer100": 3.7
    },
    {
        "name": "纯牛奶(全脂，麦趣尔牌)",
        "kcalPer100": 61,
        "proteinPer100": 2.9,
        "carbsPer100": 5.3,
        "fatPer100": 3.1
    },
    {
        "name": "纯牛奶(全脂,蒙牛纯牛奶)",
        "kcalPer100": 67,
        "proteinPer100": 3.4,
        "carbsPer100": 4.7,
        "fatPer100": 3.8
    },
    {
        "name": "纯牛奶（全脂，蒙牛特仑 苏有机纯牛奶)",
        "kcalPer100": 69,
        "proteinPer100": 3.4,
        "carbsPer100": 4.9,
        "fatPer100": 4
    },
    {
        "name": "纯牛奶（全脂，明治醇壹 高温杀菌乳)",
        "kcalPer100": 67,
        "proteinPer100": 3.6,
        "carbsPer100": 4.8,
        "fatPer100": 3.7
    },
    {
        "name": "纯牛奶(全脂,帕玛拉特牌)",
        "kcalPer100": 61,
        "proteinPer100": 3,
        "carbsPer100": 5.3,
        "fatPer100": 3.1
    },
    {
        "name": "纯牛奶（全脂，瑞士艾美 全脂牛奶)",
        "kcalPer100": 70,
        "proteinPer100": 3.2,
        "carbsPer100": 6.4,
        "fatPer100": 3.5
    },
    {
        "name": "纯牛奶（全脂，三元牌）",
        "kcalPer100": 69,
        "proteinPer100": 3.4,
        "carbsPer100": 5.1,
        "fatPer100": 3.9
    },
    {
        "name": "纯牛奶（全脂，圣牧有机 纯牛奶)",
        "kcalPer100": 74,
        "proteinPer100": 3.5,
        "carbsPer100": 5.7,
        "fatPer100": 4.1
    },
    {
        "name": "纯牛奶（全脂，天润牌浓 缩纯奶）",
        "kcalPer100": 67,
        "proteinPer100": 3.2,
        "carbsPer100": 5.7,
        "fatPer100": 3.5
    },
    {
        "name": "纯牛奶(全脂，完达山纯牛奶)",
        "kcalPer100": 66,
        "proteinPer100": 3.5,
        "carbsPer100": 3.6,
        "fatPer100": 4.2
    },
    {
        "name": "纯牛奶(全脂，完达山牌)",
        "kcalPer100": 60,
        "proteinPer100": 2.9,
        "carbsPer100": 4.9,
        "fatPer100": 3.2
    },
    {
        "name": "纯牛奶(全脂，夏进纯牛奶)",
        "kcalPer100": 63,
        "proteinPer100": 3.5,
        "carbsPer100": 4.4,
        "fatPer100": 3.5
    },
    {
        "name": "纯牛奶（全脂，现代牧业 纯牛奶)",
        "kcalPer100": 66,
        "proteinPer100": 3.3,
        "carbsPer100": 5.1,
        "fatPer100": 3.6
    },
    {
        "name": "纯牛奶（全脂，新南洋牌）",
        "kcalPer100": 67,
        "proteinPer100": 3.1,
        "carbsPer100": 5.1,
        "fatPer100": 3.8
    },
    {
        "name": "纯牛奶(全脂，新希望复原乳）",
        "kcalPer100": 63,
        "proteinPer100": 3,
        "carbsPer100": 4.6,
        "fatPer100": 3.6
    },
    {
        "name": "纯牛奶（全脂，新希望千 岛湖牧场纯牛奶)",
        "kcalPer100": 62,
        "proteinPer100": 3.2,
        "carbsPer100": 4.3,
        "fatPer100": 3.5
    },
    {
        "name": "纯牛奶(全脂，伊利纯牛奶)",
        "kcalPer100": 66,
        "proteinPer100": 3.4,
        "carbsPer100": 4.2,
        "fatPer100": 3.9
    },
    {
        "name": "纯牛奶（全脂，伊利金典 有机纯牛奶)",
        "kcalPer100": 73,
        "proteinPer100": 3.5,
        "carbsPer100": 5.4,
        "fatPer100": 4.1
    },
    {
        "name": "纯牛奶（全脂，意大利培 兰全脂纯牛奶）",
        "kcalPer100": 63,
        "proteinPer100": 3.5,
        "carbsPer100": 4.2,
        "fatPer100": 3.6
    },
    {
        "name": "莼菜（瓶装）",
        "kcalPer100": 21,
        "proteinPer100": 1.4,
        "carbsPer100": 3.8,
        "fatPer100": 0.1,
        "aliases": [
            "花案菜"
        ]
    },
    {
        "name": "醇牛奶)",
        "kcalPer100": 69,
        "proteinPer100": 3.4,
        "carbsPer100": 5.4,
        "fatPer100": 3.7
    },
    {
        "name": "慈姑（鲜）",
        "kcalPer100": 97,
        "proteinPer100": 4.6,
        "carbsPer100": 19.9,
        "fatPer100": 0.2,
        "aliases": [
            "乌芋",
            "白地果"
        ]
    },
    {
        "name": "刺儿菜（鲜）",
        "kcalPer100": 174,
        "proteinPer100": 4.5,
        "carbsPer100": 5.9,
        "fatPer100": 0.4,
        "aliases": [
            "小蓟",
            "蓟蓟菜"
        ]
    },
    {
        "name": "刺梨",
        "kcalPer100": 63,
        "proteinPer100": 0.7,
        "carbsPer100": 16.9,
        "fatPer100": 0.1,
        "aliases": [
            "茨梨",
            "木梨子"
        ]
    },
    {
        "name": "刺猬皮",
        "kcalPer100": 357,
        "proteinPer100": 69.2,
        "carbsPer100": 0.8,
        "fatPer100": 8.6
    },
    {
        "name": "葱 (小葱，鲜)",
        "kcalPer100": 27,
        "proteinPer100": 1.6,
        "carbsPer100": 4.9,
        "fatPer100": 0.4
    },
    {
        "name": "粗稻 (红)",
        "kcalPer100": 348,
        "proteinPer100": 7,
        "carbsPer100": 76.4,
        "fatPer100": 2
    },
    {
        "name": "粗米",
        "kcalPer100": 340,
        "proteinPer100": 7.5,
        "carbsPer100": 78,
        "fatPer100": 1.1
    },
    {
        "name": "粗米 (标一)",
        "kcalPer100": 348,
        "proteinPer100": 7.7,
        "carbsPer100": 77.9,
        "fatPer100": 0.7
    },
    {
        "name": "粗米（标准）",
        "kcalPer100": 349,
        "proteinPer100": 7.9,
        "carbsPer100": 78.3,
        "fatPer100": 0.6,
        "aliases": [
            "机米"
        ]
    },
    {
        "name": "粗米饭（蒸）",
        "kcalPer100": 117,
        "proteinPer100": 3,
        "carbsPer100": 26.4,
        "fatPer100": 0.4
    },
    {
        "name": "粗米粉",
        "kcalPer100": 356,
        "proteinPer100": 7.4,
        "carbsPer100": 81.5,
        "fatPer100": 0.1,
        "aliases": [
            "排米粉"
        ]
    },
    {
        "name": "粗米粉 (干，细)",
        "kcalPer100": 346,
        "proteinPer100": 8,
        "carbsPer100": 78.3,
        "fatPer100": 0.1
    },
    {
        "name": "粗米粥",
        "kcalPer100": 59,
        "proteinPer100": 1.3,
        "carbsPer100": 13.4,
        "fatPer100": 0.2
    },
    {
        "name": "粗糯米",
        "kcalPer100": 352,
        "proteinPer100": 7.9,
        "carbsPer100": 78,
        "fatPer100": 1.1
    },
    {
        "name": "醋栗",
        "kcalPer100": 46,
        "proteinPer100": 0.9,
        "carbsPer100": 10.2,
        "fatPer100": 0.6,
        "aliases": [
            "灯笼果"
        ]
    },
    {
        "name": "脆皮肠",
        "kcalPer100": 302,
        "proteinPer100": 16.6,
        "carbsPer100": 4.8,
        "fatPer100": 24
    },
    {
        "name": "达乌里胡枝子（鲜）",
        "kcalPer100": 491,
        "proteinPer100": 7,
        "carbsPer100": 23.1,
        "fatPer100": 1,
        "aliases": [
            "牛枝",
            "豆豆苗"
        ]
    },
    {
        "name": "大白菜 (小白口)",
        "kcalPer100": 16,
        "proteinPer100": 1.3,
        "carbsPer100": 2.8,
        "fatPer100": 0.1
    },
    {
        "name": "大白菜（白梗)",
        "kcalPer100": 22,
        "proteinPer100": 1.7,
        "carbsPer100": 3.7,
        "fatPer100": 0.2,
        "aliases": [
            "黄芽白"
        ]
    },
    {
        "name": "大白菜（白口）",
        "kcalPer100": 14,
        "proteinPer100": 1,
        "carbsPer100": 2.9,
        "fatPer100": 0.1
    },
    {
        "name": "大白菜（代表值）",
        "kcalPer100": 20,
        "proteinPer100": 1.6,
        "carbsPer100": 3.4,
        "fatPer100": 0.2,
        "aliases": [
            "白菜",
            "大白菜"
        ]
    },
    {
        "name": "大白菜（青白口）",
        "kcalPer100": 17,
        "proteinPer100": 1.4,
        "carbsPer100": 3,
        "fatPer100": 0.1
    },
    {
        "name": "大白菜（青口）",
        "kcalPer100": 12,
        "proteinPer100": 1.1,
        "carbsPer100": 2.6,
        "fatPer100": 0.1
    },
    {
        "name": "大巢菜(鲜)野茗子，野豌豆]",
        "kcalPer100": 264,
        "proteinPer100": 3.8,
        "carbsPer100": 13.6,
        "fatPer100": 0.5
    },
    {
        "name": "大葱",
        "kcalPer100": 28,
        "proteinPer100": 1.6,
        "carbsPer100": 5.8,
        "fatPer100": 0.3
    },
    {
        "name": "大葱 (红皮)",
        "kcalPer100": 49,
        "proteinPer100": 2.4,
        "carbsPer100": 10.2,
        "fatPer100": 0.1
    },
    {
        "name": "大红菇（干）",
        "kcalPer100": 263,
        "proteinPer100": 24.4,
        "carbsPer100": 31.6,
        "fatPer100": 50.9,
        "aliases": [
            "草质红菇"
        ]
    },
    {
        "name": "大黄米",
        "kcalPer100": 356,
        "proteinPer100": 13.6,
        "carbsPer100": 71.1,
        "fatPer100": 2.7,
        "aliases": [
            "黍子"
        ]
    },
    {
        "name": "大蓟叶（鲜）",
        "kcalPer100": 158,
        "proteinPer100": 1.5,
        "carbsPer100": 5.5,
        "fatPer100": 1.4,
        "aliases": [
            "飞廉叶"
        ]
    },
    {
        "name": "大腊肠",
        "kcalPer100": 267,
        "proteinPer100": 12.9,
        "carbsPer100": 8.6,
        "fatPer100": 20.1
    },
    {
        "name": "大菱鲆鱼（鲜）",
        "kcalPer100": 81,
        "proteinPer100": 17,
        "carbsPer100": 0.7,
        "fatPer100": 1.1,
        "aliases": [
            "多宝鱼"
        ]
    },
    {
        "name": "大肉肠",
        "kcalPer100": 273,
        "proteinPer100": 12,
        "carbsPer100": 4.6,
        "fatPer100": 22.9
    },
    {
        "name": "大薯（鲜）",
        "kcalPer100": 108,
        "proteinPer100": 2.1,
        "carbsPer100": 24.9,
        "fatPer100": 0.2,
        "aliases": [
            "参薯"
        ]
    },
    {
        "name": "大蒜（白皮，鲜）",
        "kcalPer100": 128,
        "proteinPer100": 4.5,
        "carbsPer100": 27.6,
        "fatPer100": 0.2,
        "aliases": [
            "蒜头"
        ]
    },
    {
        "name": "大蒜（脱水）",
        "kcalPer100": 348,
        "proteinPer100": 13.2,
        "carbsPer100": 75.4,
        "fatPer100": 0.3
    },
    {
        "name": "大蒜（紫皮，鲜）",
        "kcalPer100": 139,
        "proteinPer100": 5.2,
        "carbsPer100": 29.6,
        "fatPer100": 0.2,
        "aliases": [
            "蒜头"
        ]
    },
    {
        "name": "大闸蟹 (母)",
        "kcalPer100": 156,
        "proteinPer100": 21,
        "carbsPer100": 0.6,
        "fatPer100": 7.7
    },
    {
        "name": "带鱼",
        "kcalPer100": 127,
        "proteinPer100": 17.7,
        "carbsPer100": 3.1,
        "fatPer100": 4.9,
        "aliases": [
            "白带鱼",
            "刀鱼"
        ]
    },
    {
        "name": "带鱼 (切段)",
        "kcalPer100": 108,
        "proteinPer100": 17.6,
        "carbsPer100": 0,
        "fatPer100": 4.2
    },
    {
        "name": "蛋白粉（益力健乳铁乳清 蛋白粉）",
        "kcalPer100": 425,
        "proteinPer100": 50,
        "carbsPer100": 28,
        "fatPer100": 12.5
    },
    {
        "name": "蛋清肠",
        "kcalPer100": 278,
        "proteinPer100": 12.5,
        "carbsPer100": 5.8,
        "fatPer100": 22.8
    },
    {
        "name": "刀豆（鲜）",
        "kcalPer100": 40,
        "proteinPer100": 3.1,
        "carbsPer100": 7,
        "fatPer100": 0.3
    },
    {
        "name": "地肤（鲜）",
        "kcalPer100": 273,
        "proteinPer100": 5.2,
        "carbsPer100": 10.4,
        "fatPer100": 0.8,
        "aliases": [
            "益明",
            "扫帚苗"
        ]
    },
    {
        "name": "地笋(鲜",
        "kcalPer100": 288,
        "proteinPer100": 4.3,
        "carbsPer100": 13.7,
        "fatPer100": 0.7,
        "aliases": [
            "地古牛",
            "地瓜儿苗叶"
        ]
    },
    {
        "name": "低脂奶）",
        "kcalPer100": 48,
        "proteinPer100": 3.7,
        "carbsPer100": 5.4,
        "fatPer100": 1.3
    },
    {
        "name": "低脂奶粉(代表值，高钙高铁)",
        "kcalPer100": 425,
        "proteinPer100": 23.7,
        "carbsPer100": 55.9,
        "fatPer100": 11.9,
        "aliases": [
            "低脂奶粉"
        ]
    },
    {
        "name": "低脂奶粉(高钙高铁，可淇牌)",
        "kcalPer100": 437,
        "proteinPer100": 17,
        "carbsPer100": 63,
        "fatPer100": 13
    },
    {
        "name": "低脂奶粉(高钙高铁，雀巢)",
        "kcalPer100": 413,
        "proteinPer100": 27,
        "carbsPer100": 50,
        "fatPer100": 11.7
    },
    {
        "name": "低脂奶粉(高钙高铁，伊利牌)",
        "kcalPer100": 423,
        "proteinPer100": 27,
        "carbsPer100": 53.9,
        "fatPer100": 11
    },
    {
        "name": "低脂奶酪",
        "kcalPer100": 241,
        "proteinPer100": 21.6,
        "carbsPer100": 12.6,
        "fatPer100": 11.6
    },
    {
        "name": "堤鱼",
        "kcalPer100": 191,
        "proteinPer100": 17.6,
        "carbsPer100": 1.3,
        "fatPer100": 12.8
    },
    {
        "name": "淀粉 （大米）",
        "kcalPer100": 366,
        "proteinPer100": 0.2,
        "carbsPer100": 89.3,
        "fatPer100": 0.7
    },
    {
        "name": "淀粉 (马铃薯)",
        "kcalPer100": 332,
        "proteinPer100": 0.1,
        "carbsPer100": 82,
        "fatPer100": 0.1
    },
    {
        "name": "淀粉 (小麦)",
        "kcalPer100": 351,
        "proteinPer100": 0.2,
        "carbsPer100": 86,
        "fatPer100": 0.5
    },
    {
        "name": "鲷",
        "kcalPer100": 106,
        "proteinPer100": 17.9,
        "carbsPer100": 2.7,
        "fatPer100": 2.6,
        "aliases": [
            "黑鲷",
            "铜盆鱼",
            "大目鱼"
        ]
    },
    {
        "name": "吊蛋",
        "kcalPer100": 65,
        "proteinPer100": 0.8,
        "carbsPer100": 16.8,
        "fatPer100": 0.4
    },
    {
        "name": "调制乳 (全脂，学生奶)",
        "kcalPer100": 66,
        "proteinPer100": 2.6,
        "carbsPer100": 8.1,
        "fatPer100": 2.6
    },
    {
        "name": "调制乳（低脂，澳大利亚 德运高钙低脂奶)",
        "kcalPer100": 52,
        "proteinPer100": 3.5,
        "carbsPer100": 7.1,
        "fatPer100": 1.1
    },
    {
        "name": "调制乳（低脂，强化锌、钙， 帕玛拉特）",
        "kcalPer100": 60,
        "proteinPer100": 3,
        "carbsPer100": 5,
        "fatPer100": 3.1
    },
    {
        "name": "调制乳（低脂，伊利低脂 型舒化奶）",
        "kcalPer100": 46,
        "proteinPer100": 3.4,
        "carbsPer100": 4.6,
        "fatPer100": 1.5
    },
    {
        "name": "调制乳（低脂，伊利高钙 低脂奶）",
        "kcalPer100": 47,
        "proteinPer100": 3.2,
        "carbsPer100": 5.5,
        "fatPer100": 1.3
    },
    {
        "name": "调制乳（全脂，旺仔复原 乳牛奶）",
        "kcalPer100": 74,
        "proteinPer100": 2.5,
        "carbsPer100": 10.1,
        "fatPer100": 2.6
    },
    {
        "name": "调制乳（全脂，夏进炼乳 牛奶）",
        "kcalPer100": 71,
        "proteinPer100": 2.5,
        "carbsPer100": 8.2,
        "fatPer100": 3.1
    },
    {
        "name": "调制乳（全脂，新西兰安 佳原味进口儿童牛奶）",
        "kcalPer100": 70,
        "proteinPer100": 3.6,
        "carbsPer100": 5.9,
        "fatPer100": 3.5
    },
    {
        "name": "调制乳（全脂，新希望特 浓牛奶)",
        "kcalPer100": 66,
        "proteinPer100": 3.3,
        "carbsPer100": 5.4,
        "fatPer100": 3.5
    },
    {
        "name": "调制乳(全脂，伊利舒化奶)",
        "kcalPer100": 68,
        "proteinPer100": 3.5,
        "carbsPer100": 5,
        "fatPer100": 3.8
    },
    {
        "name": "调制乳（全脂，伊利早餐 奶麦香味)",
        "kcalPer100": 71,
        "proteinPer100": 2.9,
        "carbsPer100": 7.6,
        "fatPer100": 3.2
    },
    {
        "name": "调制乳（脱脂，部分复原乳， 澳大利亚德运高钙脱脂奶）",
        "kcalPer100": 42,
        "proteinPer100": 3.6,
        "carbsPer100": 6.2,
        "fatPer100": 0.3
    },
    {
        "name": "调制乳(脱脂，伊利脱脂奶)",
        "kcalPer100": 34,
        "proteinPer100": 3.3,
        "carbsPer100": 4.5,
        "fatPer100": 0.3
    },
    {
        "name": "鲽",
        "kcalPer100": 107,
        "proteinPer100": 21.1,
        "carbsPer100": 0.5,
        "fatPer100": 2.3,
        "aliases": [
            "比目鱼",
            "凸眼鱼"
        ]
    },
    {
        "name": "丁桂鱼",
        "kcalPer100": 157,
        "proteinPer100": 29.7,
        "carbsPer100": 0.2,
        "fatPer100": 4.2
    },
    {
        "name": "丁香鱼 (干)",
        "kcalPer100": 196,
        "proteinPer100": 37.5,
        "carbsPer100": 4.6,
        "fatPer100": 3.1
    },
    {
        "name": "丁香鱼 (香辣味)",
        "kcalPer100": 403,
        "proteinPer100": 19,
        "carbsPer100": 18.3,
        "fatPer100": 28.2
    },
    {
        "name": "东方对虾",
        "kcalPer100": 84,
        "proteinPer100": 18.3,
        "carbsPer100": 1.6,
        "fatPer100": 0.5,
        "aliases": [
            "中国对虾"
        ]
    },
    {
        "name": "冬菇（干）",
        "kcalPer100": 277,
        "proteinPer100": 17.8,
        "carbsPer100": 32.3,
        "fatPer100": 1.3,
        "aliases": [
            "毛柄金线菌"
        ]
    },
    {
        "name": "冬果梨",
        "kcalPer100": 46,
        "proteinPer100": 0.4,
        "carbsPer100": 12.8,
        "fatPer100": 0.2
    },
    {
        "name": "冬寒菜（鲜）",
        "kcalPer100": 34,
        "proteinPer100": 3.9,
        "carbsPer100": 4.9,
        "fatPer100": 0.4,
        "aliases": [
            "冬苋菜",
            "冬葵"
        ]
    },
    {
        "name": "冬笋（鲜）",
        "kcalPer100": 42,
        "proteinPer100": 4.1,
        "carbsPer100": 6.5,
        "fatPer100": 0.1
    },
    {
        "name": "冬枣",
        "kcalPer100": 113,
        "proteinPer100": 1.8,
        "carbsPer100": 2.2,
        "fatPer100": 0.2
    },
    {
        "name": "豆瓣菜(鲜)西洋菜，水田芥]",
        "kcalPer100": 20,
        "proteinPer100": 2.9,
        "carbsPer100": 1.5,
        "fatPer100": 0.5
    },
    {
        "name": "豆腐 (北豆腐)",
        "kcalPer100": 116,
        "proteinPer100": 9.2,
        "carbsPer100": 3,
        "fatPer100": 8.1
    },
    {
        "name": "豆腐（代表值）",
        "kcalPer100": 84,
        "proteinPer100": 6.6,
        "carbsPer100": 3.4,
        "fatPer100": 5.3,
        "aliases": [
            "豆腐"
        ],
        "unitWeight": 300,
        "unitName": "块"
    },
    {
        "name": "豆腐（南豆腐）",
        "kcalPer100": 87,
        "proteinPer100": 5.7,
        "carbsPer100": 3.9,
        "fatPer100": 5.8
    },
    {
        "name": "豆腐(内酯)",
        "kcalPer100": 50,
        "proteinPer100": 5,
        "carbsPer100": 3.3,
        "fatPer100": 1.9
    },
    {
        "name": "豆腐干 (菜干)",
        "kcalPer100": 137,
        "proteinPer100": 13.4,
        "carbsPer100": 5,
        "fatPer100": 7.1
    },
    {
        "name": "豆腐干 (臭干)",
        "kcalPer100": 99,
        "proteinPer100": 10.2,
        "carbsPer100": 4.5,
        "fatPer100": 4.6
    },
    {
        "name": "豆腐干 (代表值)",
        "kcalPer100": 197,
        "proteinPer100": 14.9,
        "carbsPer100": 9.6,
        "fatPer100": 11.3,
        "aliases": [
            "豆腐干"
        ]
    },
    {
        "name": "豆腐干 (酱油干)",
        "kcalPer100": 157,
        "proteinPer100": 14.9,
        "carbsPer100": 4,
        "fatPer100": 9.1
    },
    {
        "name": "豆腐干 (卤干)",
        "kcalPer100": 339,
        "proteinPer100": 14.5,
        "carbsPer100": 33.4,
        "fatPer100": 16.7
    },
    {
        "name": "豆腐干 (蒲包干）",
        "kcalPer100": 135,
        "proteinPer100": 12.1,
        "carbsPer100": 8.9,
        "fatPer100": 5.7
    },
    {
        "name": "豆腐干 (香干)",
        "kcalPer100": 152,
        "proteinPer100": 15.8,
        "carbsPer100": 5.1,
        "fatPer100": 7.8
    },
    {
        "name": "豆腐干 (小香干)",
        "kcalPer100": 174,
        "proteinPer100": 17.9,
        "carbsPer100": 5.4,
        "fatPer100": 9.1
    },
    {
        "name": "豆腐干 (熏干)",
        "kcalPer100": 154,
        "proteinPer100": 15.8,
        "carbsPer100": 8.8,
        "fatPer100": 6.2
    },
    {
        "name": "豆腐花",
        "kcalPer100": 401,
        "proteinPer100": 10,
        "carbsPer100": 84.3,
        "fatPer100": 2.6,
        "aliases": [
            "豆腐粉"
        ]
    },
    {
        "name": "豆腐卷",
        "kcalPer100": 203,
        "proteinPer100": 17.9,
        "carbsPer100": 7.2,
        "fatPer100": 11.6
    },
    {
        "name": "豆腐脑",
        "kcalPer100": 15,
        "proteinPer100": 1.9,
        "carbsPer100": 0,
        "fatPer100": 0.8,
        "aliases": [
            "老豆腐"
        ]
    },
    {
        "name": "豆腐皮",
        "kcalPer100": 447,
        "proteinPer100": 51.6,
        "carbsPer100": 12.5,
        "fatPer100": 23
    },
    {
        "name": "豆腐丝",
        "kcalPer100": 203,
        "proteinPer100": 21.5,
        "carbsPer100": 6.2,
        "fatPer100": 10.5
    },
    {
        "name": "豆腐丝 (干)",
        "kcalPer100": 451,
        "proteinPer100": 57.7,
        "carbsPer100": 3.7,
        "fatPer100": 22.8
    },
    {
        "name": "豆腐丝 (油)",
        "kcalPer100": 304,
        "proteinPer100": 24.2,
        "carbsPer100": 14.5,
        "fatPer100": 17.1
    },
    {
        "name": "豆肝尖",
        "kcalPer100": 203,
        "proteinPer100": 17.2,
        "carbsPer100": 9.4,
        "fatPer100": 12
    },
    {
        "name": "豆浆",
        "kcalPer100": 31,
        "proteinPer100": 3,
        "carbsPer100": 1.2,
        "fatPer100": 1.6
    },
    {
        "name": "豆浆 (甜)",
        "kcalPer100": 34,
        "proteinPer100": 2.4,
        "carbsPer100": 4.9,
        "fatPer100": 0.5
    },
    {
        "name": "豆浆粉",
        "kcalPer100": 426,
        "proteinPer100": 19.7,
        "carbsPer100": 66.8,
        "fatPer100": 9.4
    },
    {
        "name": "豆角",
        "kcalPer100": 34,
        "proteinPer100": 2.5,
        "carbsPer100": 6.7,
        "fatPer100": 0.2
    },
    {
        "name": "豆角（鲜，白）",
        "kcalPer100": 35,
        "proteinPer100": 2.2,
        "carbsPer100": 7.4,
        "fatPer100": 0.2
    },
    {
        "name": "豆奶",
        "kcalPer100": 30,
        "proteinPer100": 2.4,
        "carbsPer100": 1.8,
        "fatPer100": 1.5,
        "aliases": [
            "豆乳"
        ]
    },
    {
        "name": "豆奶粉 (大磨牌)",
        "kcalPer100": 432,
        "proteinPer100": 27.4,
        "carbsPer100": 51.6,
        "fatPer100": 13
    },
    {
        "name": "豆奶粉 (维维牌)",
        "kcalPer100": 421,
        "proteinPer100": 19.4,
        "carbsPer100": 65.2,
        "fatPer100": 9.4
    },
    {
        "name": "豆奶粉（多力牌）",
        "kcalPer100": 405,
        "proteinPer100": 12.3,
        "carbsPer100": 76.4,
        "fatPer100": 6.5
    },
    {
        "name": "豆薯(鲜)",
        "kcalPer100": 56,
        "proteinPer100": 0.9,
        "carbsPer100": 13.4,
        "fatPer100": 0.1,
        "aliases": [
            "凉薯",
            "地瓜",
            "沙葛"
        ]
    },
    {
        "name": "豆汁(生）",
        "kcalPer100": 10,
        "proteinPer100": 0.9,
        "carbsPer100": 1.4,
        "fatPer100": 0.1
    },
    {
        "name": "肚里黄",
        "kcalPer100": 337,
        "proteinPer100": 8.8,
        "carbsPer100": 76.7,
        "fatPer100": 1.2
    },
    {
        "name": "对虾",
        "kcalPer100": 93,
        "proteinPer100": 18.6,
        "carbsPer100": 2.8,
        "fatPer100": 0.8
    },
    {
        "name": "鹅蛋",
        "kcalPer100": 196,
        "proteinPer100": 11.1,
        "carbsPer100": 2.8,
        "fatPer100": 15.6
    },
    {
        "name": "鹅蛋 (煮)",
        "kcalPer100": 177,
        "proteinPer100": 12.7,
        "carbsPer100": 1,
        "fatPer100": 13.6
    },
    {
        "name": "鹅蛋黄",
        "kcalPer100": 324,
        "proteinPer100": 15.5,
        "carbsPer100": 6.2,
        "fatPer100": 26.4
    },
    {
        "name": "鹅盹",
        "kcalPer100": 100,
        "proteinPer100": 19.6,
        "carbsPer100": 1.1,
        "fatPer100": 1.9
    },
    {
        "name": "鹅肝",
        "kcalPer100": 129,
        "proteinPer100": 15.2,
        "carbsPer100": 9.3,
        "fatPer100": 3.4
    },
    {
        "name": "鹅黄梨",
        "kcalPer100": 41,
        "proteinPer100": 0.3,
        "carbsPer100": 1.9,
        "fatPer100": 10.7
    },
    {
        "name": "鹅血",
        "kcalPer100": 74,
        "proteinPer100": 18.6,
        "carbsPer100": 0,
        "fatPer100": 0
    },
    {
        "name": "颚针鱼",
        "kcalPer100": 180,
        "proteinPer100": 20.2,
        "carbsPer100": 1.4,
        "fatPer100": 10.4,
        "aliases": [
            "针量鱼"
        ]
    },
    {
        "name": "鳄梨",
        "kcalPer100": 171,
        "proteinPer100": 2,
        "carbsPer100": 7.4,
        "fatPer100": 15.3
    },
    {
        "name": "儿童肠",
        "kcalPer100": 290,
        "proteinPer100": 13.1,
        "carbsPer100": 15.3,
        "fatPer100": 19.6
    },
    {
        "name": "儿童配方奶粉 (代表值)",
        "kcalPer100": 454,
        "proteinPer100": 19,
        "carbsPer100": 1.1,
        "fatPer100": 17.3,
        "aliases": [
            "儿童配方奶粉"
        ]
    },
    {
        "name": "儿童配方奶粉（贝因美特 选幼童配方奶粉4阶段)",
        "kcalPer100": 473,
        "proteinPer100": 18,
        "carbsPer100": 0.6,
        "fatPer100": 56.6
    },
    {
        "name": "儿童配方奶粉（惠氏金装 学儿乐学龄前儿童配方奶粉)",
        "kcalPer100": 442,
        "proteinPer100": 17,
        "carbsPer100": 3,
        "fatPer100": 58.9
    },
    {
        "name": "儿童配方奶粉（美赞臣安 儿健儿童配方奶粉）",
        "kcalPer100": 434,
        "proteinPer100": 20,
        "carbsPer100": 3,
        "fatPer100": 12
    },
    {
        "name": "儿童配方奶粉（明治珍爱 童儿童配方奶粉）",
        "kcalPer100": 465,
        "proteinPer100": 20,
        "carbsPer100": 0.3,
        "fatPer100": 19
    },
    {
        "name": "儿童配方奶粉（欧世蒙牛 金装佳智学龄前儿童特殊配 方奶粉4阶段)",
        "kcalPer100": 470,
        "proteinPer100": 17.9,
        "carbsPer100": 52.5,
        "fatPer100": 20.9
    },
    {
        "name": "儿童配方奶粉（雀巢能恩 全进口奶源儿童配方奶粉4）",
        "kcalPer100": 455,
        "proteinPer100": 22,
        "carbsPer100": 49,
        "fatPer100": 19
    },
    {
        "name": "儿童配方奶粉（三元爱益 儿童成长配方奶粉)",
        "kcalPer100": 500,
        "proteinPer100": 20,
        "carbsPer100": 60,
        "fatPer100": 20
    },
    {
        "name": "儿童配方奶粉（伊利儿童 配方奶粉）",
        "kcalPer100": 465,
        "proteinPer100": 20,
        "carbsPer100": 0.6,
        "fatPer100": 50.6
    },
    {
        "name": "儿童配方奶粉（伊利金领 冠儿童配方奶粉)",
        "kcalPer100": 467,
        "proteinPer100": 21.5,
        "carbsPer100": 50.6,
        "fatPer100": 20
    },
    {
        "name": "儿童配方奶粉（伊利金装 儿童配方奶粉）",
        "kcalPer100": 467,
        "proteinPer100": 21.5,
        "carbsPer100": 0.6,
        "fatPer100": 20
    },
    {
        "name": "尔蒙特低脂牛奶）",
        "kcalPer100": 45,
        "proteinPer100": 3.4,
        "carbsPer100": 4.6,
        "fatPer100": 1.4
    },
    {
        "name": "发芽豆",
        "kcalPer100": 131,
        "proteinPer100": 12.4,
        "carbsPer100": 19.4,
        "fatPer100": 0.7
    },
    {
        "name": "番茄",
        "kcalPer100": 15,
        "proteinPer100": 0.9,
        "carbsPer100": 3.3,
        "fatPer100": 0.2,
        "aliases": [
            "西红柿"
        ],
        "unitWeight": 150,
        "unitName": "个"
    },
    {
        "name": "番茄 (整个，罐头)",
        "kcalPer100": 22,
        "proteinPer100": 2,
        "carbsPer100": 2.6,
        "fatPer100": 0.6
    },
    {
        "name": "番石榴",
        "kcalPer100": 53,
        "proteinPer100": 1.1,
        "carbsPer100": 14.2,
        "fatPer100": 0.4,
        "aliases": [
            "鸡矢果",
            "番桃"
        ]
    },
    {
        "name": "番杏",
        "kcalPer100": 15,
        "proteinPer100": 1.8,
        "carbsPer100": 3.1,
        "fatPer100": 0.1,
        "aliases": [
            "新西兰菠菜",
            "夏菠菜"
        ]
    },
    {
        "name": "方瓜",
        "kcalPer100": 14,
        "proteinPer100": 0.8,
        "carbsPer100": 0.6,
        "fatPer100": 3.1
    },
    {
        "name": "方奶粉） 较大婴儿配方奶粉（飞帆 较大婴儿配方奶粉Ⅱ）",
        "kcalPer100": 482,
        "proteinPer100": 15,
        "carbsPer100": 57.8,
        "fatPer100": 21.5
    },
    {
        "name": "方腿",
        "kcalPer100": 117,
        "proteinPer100": 16.2,
        "carbsPer100": 1.9,
        "fatPer100": 5
    },
    {
        "name": "分葱",
        "kcalPer100": 34,
        "proteinPer100": 2.2,
        "carbsPer100": 5.1,
        "fatPer100": 0.7,
        "aliases": [
            "四季葱",
            "菜葱"
        ]
    },
    {
        "name": "粉丝",
        "kcalPer100": 338,
        "proteinPer100": 0.2,
        "carbsPer100": 1.1,
        "fatPer100": 83.7
    },
    {
        "name": "粉条",
        "kcalPer100": 338,
        "proteinPer100": 0.5,
        "carbsPer100": 0.6,
        "fatPer100": 84.2
    },
    {
        "name": "风干肠",
        "kcalPer100": 283,
        "proteinPer100": 12.4,
        "carbsPer100": 5.9,
        "fatPer100": 23.3
    },
    {
        "name": "风干肉 (藏香猪)",
        "kcalPer100": 598,
        "proteinPer100": 27.1,
        "carbsPer100": 1.7,
        "fatPer100": 53.6
    },
    {
        "name": "蜂蛹",
        "kcalPer100": 100,
        "proteinPer100": 10.6,
        "carbsPer100": 2.3,
        "fatPer100": 5.4,
        "aliases": [
            "蜂胚",
            "蜂仔"
        ]
    },
    {
        "name": "蜂蛹 (大黄)",
        "kcalPer100": 109,
        "proteinPer100": 12.1,
        "carbsPer100": 6.6,
        "fatPer100": 3.8
    },
    {
        "name": "蜂蛹 (油蜂，干)",
        "kcalPer100": 669,
        "proteinPer100": 20,
        "carbsPer100": 9,
        "fatPer100": 61.4
    },
    {
        "name": "凤尾鱼 (熟）",
        "kcalPer100": 520,
        "proteinPer100": 23.5,
        "carbsPer100": 9.7,
        "fatPer100": 43
    },
    {
        "name": "伏苹果",
        "kcalPer100": 48,
        "proteinPer100": 0.5,
        "carbsPer100": 11.8,
        "fatPer100": 0.1
    },
    {
        "name": "佛手瓜",
        "kcalPer100": 18,
        "proteinPer100": 1.2,
        "carbsPer100": 1.2,
        "fatPer100": 3.8,
        "aliases": [
            "棒瓜",
            "菜肴梨"
        ]
    },
    {
        "name": "福建式肉松",
        "kcalPer100": 493,
        "proteinPer100": 25.1,
        "carbsPer100": 39.7,
        "fatPer100": 26
    },
    {
        "name": "福橘",
        "kcalPer100": 46,
        "proteinPer100": 1,
        "carbsPer100": 10.3,
        "fatPer100": 0.2
    },
    {
        "name": "腐竹",
        "kcalPer100": 461,
        "proteinPer100": 44.6,
        "carbsPer100": 22.3,
        "fatPer100": 21.7
    },
    {
        "name": "盖莱",
        "kcalPer100": 13,
        "proteinPer100": 1.5,
        "carbsPer100": 2.8,
        "fatPer100": 0.2
    },
    {
        "name": "甘薯（白心）",
        "kcalPer100": 106,
        "proteinPer100": 1.4,
        "carbsPer100": 25.2,
        "fatPer100": 0.2,
        "aliases": [
            "红皮山芋"
        ]
    },
    {
        "name": "甘薯（红心）",
        "kcalPer100": 61,
        "proteinPer100": 0.7,
        "carbsPer100": 15.3,
        "fatPer100": 0.2,
        "aliases": [
            "山芋",
            "红薯"
        ]
    },
    {
        "name": "甘薯粉",
        "kcalPer100": 336,
        "proteinPer100": 2.7,
        "carbsPer100": 80.9,
        "fatPer100": 0.2,
        "aliases": [
            "地瓜粉"
        ]
    },
    {
        "name": "甘薯片",
        "kcalPer100": 344,
        "proteinPer100": 4.7,
        "carbsPer100": 80.5,
        "fatPer100": 0.8,
        "aliases": [
            "白薯干"
        ]
    },
    {
        "name": "橄榄（白榄）",
        "kcalPer100": 57,
        "proteinPer100": 0.8,
        "carbsPer100": 15.1,
        "fatPer100": 0.2
    },
    {
        "name": "干巴菌",
        "kcalPer100": 38,
        "proteinPer100": 3.8,
        "carbsPer100": 8,
        "fatPer100": 0.4
    },
    {
        "name": "高蛋白豆米粉 (灿米)",
        "kcalPer100": 414,
        "proteinPer100": 16.5,
        "carbsPer100": 71,
        "fatPer100": 7.1
    },
    {
        "name": "高粱面面条",
        "kcalPer100": 304,
        "proteinPer100": 7,
        "carbsPer100": 68.7,
        "fatPer100": 0.2
    },
    {
        "name": "高山白桃",
        "kcalPer100": 42,
        "proteinPer100": 0.7,
        "carbsPer100": 10.1,
        "fatPer100": 0.2
    },
    {
        "name": "鸽",
        "kcalPer100": 201,
        "proteinPer100": 16.5,
        "carbsPer100": 1.7,
        "fatPer100": 14.2
    },
    {
        "name": "葛（鲜）",
        "kcalPer100": 150,
        "proteinPer100": 2.2,
        "carbsPer100": 36.1,
        "fatPer100": 0.2,
        "aliases": [
            "葛署",
            "粉葛"
        ]
    },
    {
        "name": "根芹",
        "kcalPer100": 38,
        "proteinPer100": 2.2,
        "carbsPer100": 10,
        "fatPer100": 0.1,
        "aliases": [
            "根洋芹",
            "球根塘蒿"
        ]
    },
    {
        "name": "梗米 (标三)",
        "kcalPer100": 346,
        "proteinPer100": 0.8,
        "carbsPer100": 0.4,
        "fatPer100": 77.6
    },
    {
        "name": "梗米 (标一)",
        "kcalPer100": 345,
        "proteinPer100": 7.7,
        "carbsPer100": 0.6,
        "fatPer100": 77.4
    },
    {
        "name": "梗米 (特等)",
        "kcalPer100": 335,
        "proteinPer100": 7.3,
        "carbsPer100": 0.4,
        "fatPer100": 75.7
    },
    {
        "name": "梗米粥",
        "kcalPer100": 46,
        "proteinPer100": 1.1,
        "carbsPer100": 9.9,
        "fatPer100": 0.3
    },
    {
        "name": "梗糯米",
        "kcalPer100": 344,
        "proteinPer100": 7.9,
        "carbsPer100": 76.7,
        "fatPer100": 0.8
    },
    {
        "name": "公麻鸭",
        "kcalPer100": 360,
        "proteinPer100": 14.3,
        "carbsPer100": 6.1,
        "fatPer100": 30.9
    },
    {
        "name": "宫爆肉丁 (罐头)",
        "kcalPer100": 353,
        "proteinPer100": 17.7,
        "carbsPer100": 8.4,
        "fatPer100": 27.6
    },
    {
        "name": "狗母鱼",
        "kcalPer100": 100,
        "proteinPer100": 16.7,
        "carbsPer100": 3,
        "fatPer100": 2.3,
        "aliases": [
            "大头狗母鱼"
        ]
    },
    {
        "name": "枸杞菜（鲜）",
        "kcalPer100": 197,
        "proteinPer100": 5.6,
        "carbsPer100": 1.6,
        "fatPer100": 4.5,
        "aliases": [
            "枸杞",
            "地骨"
        ]
    },
    {
        "name": "观达菜",
        "kcalPer100": 23,
        "proteinPer100": 1.9,
        "carbsPer100": 4.5,
        "fatPer100": 0.3,
        "aliases": [
            "根达菜",
            "牛皮菜"
        ]
    },
    {
        "name": "广东香肠",
        "kcalPer100": 433,
        "proteinPer100": 18,
        "carbsPer100": 6.4,
        "fatPer100": 37.3
    },
    {
        "name": "龟甲",
        "kcalPer100": 134,
        "proteinPer100": 26.4,
        "carbsPer100": 2.6,
        "fatPer100": 2
    },
    {
        "name": "鲑鱼",
        "kcalPer100": 139,
        "proteinPer100": 17.2,
        "carbsPer100": 0,
        "fatPer100": 7.8,
        "aliases": [
            "大马哈鱼",
            "三文鱼"
        ]
    },
    {
        "name": "鲑鱼籽酱",
        "kcalPer100": 252,
        "proteinPer100": 10.9,
        "carbsPer100": 14.4,
        "fatPer100": 16.8,
        "aliases": [
            "大马哈鱼籽酱",
            "三文鱼籽酱"
        ]
    },
    {
        "name": "桂花藕粉",
        "kcalPer100": 344,
        "proteinPer100": 0.4,
        "carbsPer100": 85.3,
        "fatPer100": 0.1
    },
    {
        "name": "桂圆",
        "kcalPer100": 71,
        "proteinPer100": 1.2,
        "carbsPer100": 16.6,
        "fatPer100": 0.1
    },
    {
        "name": "桂圆 (干)",
        "kcalPer100": 319,
        "proteinPer100": 5.6,
        "carbsPer100": 76.2,
        "fatPer100": 0.2
    },
    {
        "name": "桂圆（干）",
        "kcalPer100": 277,
        "proteinPer100": 5,
        "carbsPer100": 64.8,
        "fatPer100": 0.2
    },
    {
        "name": "桂圆肉",
        "kcalPer100": 317,
        "proteinPer100": 4.6,
        "carbsPer100": 73.5,
        "fatPer100": 1
    },
    {
        "name": "国光苹果",
        "kcalPer100": 56,
        "proteinPer100": 0.3,
        "carbsPer100": 13.3,
        "fatPer100": 0.3
    },
    {
        "name": "哈密瓜",
        "kcalPer100": 34,
        "proteinPer100": 0.5,
        "carbsPer100": 7.9,
        "fatPer100": 0.1
    },
    {
        "name": "蛤",
        "kcalPer100": 382,
        "proteinPer100": 70.8,
        "carbsPer100": 0,
        "fatPer100": 11
    },
    {
        "name": "蛤蜊 (花蛤)",
        "kcalPer100": 45,
        "proteinPer100": 7.7,
        "carbsPer100": 2.2,
        "fatPer100": 0.6
    },
    {
        "name": "蛤蜊 (秋蛤剌)",
        "kcalPer100": 89,
        "proteinPer100": 15.6,
        "carbsPer100": 5,
        "fatPer100": 0.7
    },
    {
        "name": "蛤蜊 (杂色蛤蜊)",
        "kcalPer100": 53,
        "proteinPer100": 7.5,
        "carbsPer100": 0.7,
        "fatPer100": 2.2
    },
    {
        "name": "蛤蜊(代表值）",
        "kcalPer100": 62,
        "proteinPer100": 10.1,
        "carbsPer100": 2.8,
        "fatPer100": 1.1,
        "aliases": [
            "蛤蜊"
        ]
    },
    {
        "name": "蛤蜊（毛蛤剌）)",
        "kcalPer100": 97,
        "proteinPer100": 15,
        "carbsPer100": 7.1,
        "fatPer100": 1
    },
    {
        "name": "蛤蜊(沙蛤蜊）",
        "kcalPer100": 56,
        "proteinPer100": 8.9,
        "carbsPer100": 0.8,
        "fatPer100": 1.9
    },
    {
        "name": "蛤蟆油",
        "kcalPer100": 241,
        "proteinPer100": 31.4,
        "carbsPer100": 24.6,
        "fatPer100": 1.9
    },
    {
        "name": "海蚌",
        "kcalPer100": 42,
        "proteinPer100": 9.5,
        "carbsPer100": 0.2,
        "fatPer100": 0.3,
        "aliases": [
            "西施舌"
        ]
    },
    {
        "name": "海蚌 (鲜)",
        "kcalPer100": 51,
        "proteinPer100": 6.9,
        "carbsPer100": 5.5,
        "fatPer100": 0.2
    },
    {
        "name": "海蚌 (漳港海蚌，鲜)",
        "kcalPer100": 64,
        "proteinPer100": 9.4,
        "carbsPer100": 4.9,
        "fatPer100": 0.7
    },
    {
        "name": "海参",
        "kcalPer100": 78,
        "proteinPer100": 16.5,
        "carbsPer100": 2.5,
        "fatPer100": 0.2
    },
    {
        "name": "海参 (干)",
        "kcalPer100": 262,
        "proteinPer100": 50.2,
        "carbsPer100": 4.5,
        "fatPer100": 4.8
    },
    {
        "name": "海参 (水浸)",
        "kcalPer100": 25,
        "proteinPer100": 6,
        "carbsPer100": 0,
        "fatPer100": 0.1
    },
    {
        "name": "海参(干)",
        "kcalPer100": 302,
        "proteinPer100": 64,
        "carbsPer100": 9.5,
        "fatPer100": 0.9
    },
    {
        "name": "海带",
        "kcalPer100": 90,
        "proteinPer100": 1.8,
        "carbsPer100": 23.4,
        "fatPer100": 0.1,
        "aliases": [
            "江白菜",
            "昆布"
        ]
    },
    {
        "name": "海带(浸）",
        "kcalPer100": 16,
        "proteinPer100": 1.1,
        "carbsPer100": 3,
        "fatPer100": 0.1,
        "aliases": [
            "江白菜",
            "昆布"
        ]
    },
    {
        "name": "海带(鲜）",
        "kcalPer100": 13,
        "proteinPer100": 1.2,
        "carbsPer100": 2.1,
        "fatPer100": 0.1,
        "aliases": [
            "江白菜"
        ]
    },
    {
        "name": "海带菜（鲜，姑香牌）",
        "kcalPer100": 112,
        "proteinPer100": 1.4,
        "carbsPer100": 15.3,
        "fatPer100": 7.5
    },
    {
        "name": "海鲫鱼",
        "kcalPer100": 206,
        "proteinPer100": 17,
        "carbsPer100": 3.6,
        "fatPer100": 13.7,
        "aliases": [
            "九九鱼"
        ]
    },
    {
        "name": "海鲈鱼 (鲜)",
        "kcalPer100": 112,
        "proteinPer100": 19.5,
        "carbsPer100": 0.4,
        "fatPer100": 3.6
    },
    {
        "name": "海鳗",
        "kcalPer100": 122,
        "proteinPer100": 18.8,
        "carbsPer100": 0.5,
        "fatPer100": 5,
        "aliases": [
            "鲫勾"
        ]
    },
    {
        "name": "海棠 (罐头)",
        "kcalPer100": 56,
        "proteinPer100": 0.5,
        "carbsPer100": 13.6,
        "fatPer100": 0.2
    },
    {
        "name": "海棠果[子]",
        "kcalPer100": 76,
        "proteinPer100": 0.3,
        "carbsPer100": 19.2,
        "fatPer100": 0.2
    },
    {
        "name": "海头",
        "kcalPer100": 74,
        "proteinPer100": 6,
        "carbsPer100": 11.8,
        "fatPer100": 0.3
    },
    {
        "name": "海虾",
        "kcalPer100": 79,
        "proteinPer100": 16.8,
        "carbsPer100": 1.5,
        "fatPer100": 0.6
    },
    {
        "name": "海蟹",
        "kcalPer100": 95,
        "proteinPer100": 13.8,
        "carbsPer100": 4.7,
        "fatPer100": 2.3
    },
    {
        "name": "海蟹 (公)",
        "kcalPer100": 85,
        "proteinPer100": 18,
        "carbsPer100": 2.5,
        "fatPer100": 0.3
    },
    {
        "name": "海蟹 (小)",
        "kcalPer100": 81,
        "proteinPer100": 14.2,
        "carbsPer100": 3.6,
        "fatPer100": 1.1
    },
    {
        "name": "海蟹（母)",
        "kcalPer100": 64,
        "proteinPer100": 14.2,
        "carbsPer100": 1.2,
        "fatPer100": 0.3
    },
    {
        "name": "海盐皮",
        "kcalPer100": 33,
        "proteinPer100": 3.7,
        "carbsPer100": 3.8,
        "fatPer100": 0.3
    },
    {
        "name": "旱久保桃",
        "kcalPer100": 48,
        "proteinPer100": 0.9,
        "carbsPer100": 11.3,
        "fatPer100": 0.1
    },
    {
        "name": "旱苹果",
        "kcalPer100": 34,
        "proteinPer100": 0.4,
        "carbsPer100": 8.4,
        "fatPer100": 0.2
    },
    {
        "name": "蒿蒿（鲜）",
        "kcalPer100": 24,
        "proteinPer100": 1.9,
        "carbsPer100": 3.9,
        "fatPer100": 0.3,
        "aliases": [
            "蓬蒿菜",
            "艾菜"
        ]
    },
    {
        "name": "耗牛牛腱肉 (冻，鲜)",
        "kcalPer100": 100,
        "proteinPer100": 21.2,
        "carbsPer100": 2,
        "fatPer100": 0.8
    },
    {
        "name": "耗牛牛霖肉 (冻，鲜)",
        "kcalPer100": 110,
        "proteinPer100": 22.5,
        "carbsPer100": 2.7,
        "fatPer100": 1
    },
    {
        "name": "河蚌",
        "kcalPer100": 54,
        "proteinPer100": 10.9,
        "carbsPer100": 0.7,
        "fatPer100": 0.8
    },
    {
        "name": "河粉",
        "kcalPer100": 359,
        "proteinPer100": 7.7,
        "carbsPer100": 79.2,
        "fatPer100": 1.5
    },
    {
        "name": "河虾",
        "kcalPer100": 87,
        "proteinPer100": 16.4,
        "carbsPer100": 0,
        "fatPer100": 2.4
    },
    {
        "name": "河蚬",
        "kcalPer100": 47,
        "proteinPer100": 7,
        "carbsPer100": 1.7,
        "fatPer100": 1.4,
        "aliases": [
            "蚬子"
        ]
    },
    {
        "name": "河蟹",
        "kcalPer100": 103,
        "proteinPer100": 17.5,
        "carbsPer100": 2.3,
        "fatPer100": 2.6
    },
    {
        "name": "核桃（干)",
        "kcalPer100": 646,
        "proteinPer100": 14.9,
        "carbsPer100": 19.1,
        "fatPer100": 58.8,
        "aliases": [
            "胡桃"
        ]
    },
    {
        "name": "核桃(鲜)",
        "kcalPer100": 336,
        "proteinPer100": 12.8,
        "carbsPer100": 6.1,
        "fatPer100": 29.9
    },
    {
        "name": "核桃牛奶）",
        "kcalPer100": 62,
        "proteinPer100": 2.5,
        "carbsPer100": 6.6,
        "fatPer100": 2.8
    },
    {
        "name": "荷包蛋 (油煎)",
        "kcalPer100": 195,
        "proteinPer100": 13.5,
        "carbsPer100": 1.4,
        "fatPer100": 15
    },
    {
        "name": "荷包蛋 (煮)",
        "kcalPer100": 155,
        "proteinPer100": 12.3,
        "carbsPer100": 0.2,
        "fatPer100": 11.7
    },
    {
        "name": "荷兰豆",
        "kcalPer100": 30,
        "proteinPer100": 2.5,
        "carbsPer100": 4.9,
        "fatPer100": 0.3
    },
    {
        "name": "荷柿",
        "kcalPer100": 65,
        "proteinPer100": 0.6,
        "carbsPer100": 17.1,
        "fatPer100": 0.2
    },
    {
        "name": "鹤鹑",
        "kcalPer100": 110,
        "proteinPer100": 20.2,
        "carbsPer100": 0.2,
        "fatPer100": 3.1
    },
    {
        "name": "鹤鹑蛋",
        "kcalPer100": 160,
        "proteinPer100": 12.8,
        "carbsPer100": 2.1,
        "fatPer100": 11.1
    },
    {
        "name": "鹤鹑蛋 (五香罐头)",
        "kcalPer100": 152,
        "proteinPer100": 11.6,
        "carbsPer100": 0,
        "fatPer100": 0
    },
    {
        "name": "黑醋栗",
        "kcalPer100": 66,
        "proteinPer100": 1.4,
        "carbsPer100": 15.4,
        "fatPer100": 0.4,
        "aliases": [
            "黑加仑"
        ]
    },
    {
        "name": "黑大麦",
        "kcalPer100": 327,
        "proteinPer100": 10.2,
        "carbsPer100": 74.3,
        "fatPer100": 2.2
    },
    {
        "name": "黑豆 (干)",
        "kcalPer100": 401,
        "proteinPer100": 36,
        "carbsPer100": 33.6,
        "fatPer100": 15.9,
        "aliases": [
            "黑大豆"
        ]
    },
    {
        "name": "黑豆苗",
        "kcalPer100": 30,
        "proteinPer100": 0.8,
        "carbsPer100": 1.6,
        "fatPer100": 2.6
    },
    {
        "name": "黑米",
        "kcalPer100": 341,
        "proteinPer100": 9.4,
        "carbsPer100": 72.2,
        "fatPer100": 2.5
    },
    {
        "name": "黑笋(干)",
        "kcalPer100": 268,
        "proteinPer100": 17.6,
        "carbsPer100": 57.5,
        "fatPer100": 2.4
    },
    {
        "name": "黑枣 (有核)",
        "kcalPer100": 246,
        "proteinPer100": 3.7,
        "carbsPer100": 9.2,
        "fatPer100": 61.4
    },
    {
        "name": "黑枣（无核）",
        "kcalPer100": 234,
        "proteinPer100": 1.7,
        "carbsPer100": 2.6,
        "fatPer100": 0.3,
        "aliases": [
            "乌枣"
        ]
    },
    {
        "name": "红菜墓",
        "kcalPer100": 43,
        "proteinPer100": 2.9,
        "carbsPer100": 2.7,
        "fatPer100": 2.5,
        "aliases": [
            "紫菜墓"
        ]
    },
    {
        "name": "红豆沙 (去皮)",
        "kcalPer100": 244,
        "proteinPer100": 4.5,
        "carbsPer100": 57.1,
        "fatPer100": 0.1
    },
    {
        "name": "红豆馅",
        "kcalPer100": 261,
        "proteinPer100": 4.5,
        "carbsPer100": 61.7,
        "fatPer100": 0.2
    },
    {
        "name": "红富士苹果",
        "kcalPer100": 49,
        "proteinPer100": 0.7,
        "carbsPer100": 11.7,
        "fatPer100": 0.4
    },
    {
        "name": "红果",
        "kcalPer100": 102,
        "proteinPer100": 0.5,
        "carbsPer100": 25.1,
        "fatPer100": 0.6,
        "aliases": [
            "山里红",
            "大山楂"
        ]
    },
    {
        "name": "红果(干)",
        "kcalPer100": 251,
        "proteinPer100": 4.3,
        "carbsPer100": 78.4,
        "fatPer100": 2.2
    },
    {
        "name": "红果肠",
        "kcalPer100": 260,
        "proteinPer100": 10.2,
        "carbsPer100": 20.3,
        "fatPer100": 15.3
    },
    {
        "name": "红菱",
        "kcalPer100": 165,
        "proteinPer100": 5.7,
        "carbsPer100": 40.9,
        "fatPer100": 0.3
    },
    {
        "name": "红萝卜[萝]",
        "kcalPer100": 22,
        "proteinPer100": 1,
        "carbsPer100": 4.6,
        "fatPer100": 0.1
    },
    {
        "name": "红螺",
        "kcalPer100": 119,
        "proteinPer100": 20.2,
        "carbsPer100": 7.6,
        "fatPer100": 0.9
    },
    {
        "name": "红玫瑰葡萄",
        "kcalPer100": 42,
        "proteinPer100": 0.4,
        "carbsPer100": 10.7,
        "fatPer100": 0.2
    },
    {
        "name": "红奶浆菌",
        "kcalPer100": 18,
        "proteinPer100": 1.5,
        "carbsPer100": 3.3,
        "fatPer100": 0.4,
        "aliases": [
            "多汁乳菇",
            "谷熟菌"
        ]
    },
    {
        "name": "红娘鱼",
        "kcalPer100": 105,
        "proteinPer100": 18,
        "carbsPer100": 1.9,
        "fatPer100": 2.8,
        "aliases": [
            "翼红娘鱼"
        ]
    },
    {
        "name": "红鳍笛鲷",
        "kcalPer100": 134,
        "proteinPer100": 20.1,
        "carbsPer100": 2.7,
        "fatPer100": 4.8,
        "aliases": [
            "红鱼"
        ]
    },
    {
        "name": "红烧鸭 (罐头)",
        "kcalPer100": 338,
        "proteinPer100": 15.3,
        "carbsPer100": 0.6,
        "fatPer100": 30.5
    },
    {
        "name": "红提子葡萄",
        "kcalPer100": 54,
        "proteinPer100": 0.4,
        "carbsPer100": 13.1,
        "fatPer100": 0.2
    },
    {
        "name": "红香蕉苹果",
        "kcalPer100": 51,
        "proteinPer100": 0.4,
        "carbsPer100": 12.3,
        "fatPer100": 0.2
    },
    {
        "name": "红心萝卜",
        "kcalPer100": 23,
        "proteinPer100": 0.8,
        "carbsPer100": 4.9,
        "fatPer100": 0.2,
        "aliases": [
            "心里美"
        ]
    },
    {
        "name": "红星苹果",
        "kcalPer100": 58,
        "proteinPer100": 0.4,
        "carbsPer100": 14.3,
        "fatPer100": 0.1
    },
    {
        "name": "红玉苹果",
        "kcalPer100": 52,
        "proteinPer100": 0.2,
        "carbsPer100": 14.7,
        "fatPer100": 0.2
    },
    {
        "name": "红元帅苹果",
        "kcalPer100": 60,
        "proteinPer100": 0.2,
        "carbsPer100": 14.3,
        "fatPer100": 0.4
    },
    {
        "name": "虹豆",
        "kcalPer100": 32,
        "proteinPer100": 2.2,
        "carbsPer100": 7.3,
        "fatPer100": 0.3
    },
    {
        "name": "虹豆 (长)",
        "kcalPer100": 32,
        "proteinPer100": 2.7,
        "carbsPer100": 5.8,
        "fatPer100": 0.2
    },
    {
        "name": "猴头菇（罐装）",
        "kcalPer100": 21,
        "proteinPer100": 2,
        "carbsPer100": 4.2,
        "fatPer100": 4.9
    },
    {
        "name": "胡萝卜",
        "kcalPer100": 32,
        "proteinPer100": 1,
        "carbsPer100": 8.1,
        "fatPer100": 0.2,
        "aliases": [
            "红萝卜"
        ]
    },
    {
        "name": "胡萝卜 (黄)",
        "kcalPer100": 46,
        "proteinPer100": 1.4,
        "carbsPer100": 10.2,
        "fatPer100": 0.2
    },
    {
        "name": "胡萝卜 (脱水)",
        "kcalPer100": 333,
        "proteinPer100": 4.2,
        "carbsPer100": 77.9,
        "fatPer100": 1.9
    },
    {
        "name": "胡萝卜（红)",
        "kcalPer100": 39,
        "proteinPer100": 1,
        "carbsPer100": 8.8,
        "fatPer100": 0.2,
        "aliases": [
            "金笋",
            "丁香萝卜"
        ]
    },
    {
        "name": "胡萝卜缨(红，鲜)",
        "kcalPer100": 48,
        "proteinPer100": 1.7,
        "carbsPer100": 11.3,
        "fatPer100": 0.4
    },
    {
        "name": "胡麻子",
        "kcalPer100": 450,
        "proteinPer100": 19.1,
        "carbsPer100": 39.5,
        "fatPer100": 30.7
    },
    {
        "name": "胡枝子（鲜）",
        "kcalPer100": 579,
        "proteinPer100": 5.3,
        "carbsPer100": 29.6,
        "fatPer100": 2.2,
        "aliases": [
            "山豆子"
        ]
    },
    {
        "name": "胡子",
        "kcalPer100": 146,
        "proteinPer100": 15.4,
        "carbsPer100": 3.1,
        "fatPer100": 8,
        "aliases": [
            "塘虱（鱼）"
        ]
    },
    {
        "name": "胡子鱼 (雅江冷水鱼)",
        "kcalPer100": 99,
        "proteinPer100": 17.4,
        "carbsPer100": 4.4,
        "fatPer100": 1.3
    },
    {
        "name": "葫芦",
        "kcalPer100": 16,
        "proteinPer100": 0.7,
        "carbsPer100": 0.8,
        "fatPer100": 3.5,
        "aliases": [
            "长瓜",
            "蒲瓜",
            "弧瓜"
        ]
    },
    {
        "name": "葫芦条（干）",
        "kcalPer100": 256,
        "proteinPer100": 4.3,
        "carbsPer100": 18.1,
        "fatPer100": 64.6
    },
    {
        "name": "葫子",
        "kcalPer100": 29,
        "proteinPer100": 0.7,
        "carbsPer100": 6.8,
        "fatPer100": 0.1
    },
    {
        "name": "花",
        "kcalPer100": 117,
        "proteinPer100": 15.6,
        "carbsPer100": 0,
        "fatPer100": 6.1
    },
    {
        "name": "花豆(干，紫)",
        "kcalPer100": 330,
        "proteinPer100": 17.2,
        "carbsPer100": 7.4,
        "fatPer100": 1.4
    },
    {
        "name": "花骨鱼",
        "kcalPer100": 155,
        "proteinPer100": 25.8,
        "carbsPer100": 0.4,
        "fatPer100": 5.6
    },
    {
        "name": "花卷",
        "kcalPer100": 214,
        "proteinPer100": 6.4,
        "carbsPer100": 45.6,
        "fatPer100": 1
    },
    {
        "name": "花卷 (加牛奶)",
        "kcalPer100": 282,
        "proteinPer100": 6.5,
        "carbsPer100": 58.9,
        "fatPer100": 3.2
    },
    {
        "name": "花生 (烤，密日兴牌)",
        "kcalPer100": 475,
        "proteinPer100": 16.6,
        "carbsPer100": 55.9,
        "fatPer100": 22.3
    },
    {
        "name": "花生（炒)",
        "kcalPer100": 601,
        "proteinPer100": 21.7,
        "carbsPer100": 23.8,
        "fatPer100": 48
    },
    {
        "name": "花生（烤，勤俭牌）",
        "kcalPer100": 586,
        "proteinPer100": 26.4,
        "carbsPer100": 21.2,
        "fatPer100": 46.3
    },
    {
        "name": "花生（鲜）",
        "kcalPer100": 313,
        "proteinPer100": 12,
        "carbsPer100": 13,
        "fatPer100": 25.4,
        "aliases": [
            "落花生",
            "长生果]14."
        ]
    },
    {
        "name": "花生仁 (生)",
        "kcalPer100": 574,
        "proteinPer100": 24.8,
        "carbsPer100": 21.7,
        "fatPer100": 44.3
    },
    {
        "name": "花生仁（炒）",
        "kcalPer100": 589,
        "proteinPer100": 23.9,
        "carbsPer100": 25.7,
        "fatPer100": 44.4
    },
    {
        "name": "花生仁（油炸）",
        "kcalPer100": 583,
        "proteinPer100": 22.2,
        "carbsPer100": 26.2,
        "fatPer100": 47.1
    },
    {
        "name": "花叶萝卜",
        "kcalPer100": 48,
        "proteinPer100": 1.2,
        "carbsPer100": 11.5,
        "fatPer100": 0.1
    },
    {
        "name": "华青鸡",
        "kcalPer100": 158,
        "proteinPer100": 19.6,
        "carbsPer100": 0,
        "fatPer100": 8.8
    },
    {
        "name": "槐花（鲜）",
        "kcalPer100": 344,
        "proteinPer100": 3.1,
        "carbsPer100": 17,
        "fatPer100": 0.7,
        "aliases": [
            "洋槐花",
            "豆槐花"
        ]
    },
    {
        "name": "黄豆",
        "kcalPer100": 390,
        "proteinPer100": 35,
        "carbsPer100": 34.2,
        "fatPer100": 16,
        "aliases": [
            "大豆"
        ]
    },
    {
        "name": "黄豆",
        "kcalPer100": 407,
        "proteinPer100": 33.1,
        "carbsPer100": 37.3,
        "fatPer100": 15.9
    },
    {
        "name": "黄豆粉",
        "kcalPer100": 432,
        "proteinPer100": 32.7,
        "carbsPer100": 37.6,
        "fatPer100": 18.3
    },
    {
        "name": "黄鲂",
        "kcalPer100": 81,
        "proteinPer100": 18.5,
        "carbsPer100": 0.6,
        "fatPer100": 0.5,
        "aliases": [
            "赤虹",
            "老板鱼"
        ]
    },
    {
        "name": "黄姑鱼",
        "kcalPer100": 137,
        "proteinPer100": 18.4,
        "carbsPer100": 0,
        "fatPer100": 7,
        "aliases": [
            "黄婆鸡"
        ]
    },
    {
        "name": "黄姑鱼 (鲜)",
        "kcalPer100": 88,
        "proteinPer100": 14.7,
        "carbsPer100": 5.6,
        "fatPer100": 0.7
    },
    {
        "name": "黄瓜（鲜）",
        "kcalPer100": 16,
        "proteinPer100": 0.8,
        "carbsPer100": 0.5,
        "fatPer100": 2.9,
        "aliases": [
            "胡瓜"
        ]
    },
    {
        "name": "黄金西葫芦",
        "kcalPer100": 17,
        "proteinPer100": 1.8,
        "carbsPer100": 3.6,
        "fatPer100": 0.1
    },
    {
        "name": "黄茎瓜",
        "kcalPer100": 19,
        "proteinPer100": 1.2,
        "carbsPer100": 2,
        "fatPer100": 0.9,
        "aliases": [
            "小南瓜"
        ]
    },
    {
        "name": "黄螺",
        "kcalPer100": 106,
        "proteinPer100": 19.8,
        "carbsPer100": 4.5,
        "fatPer100": 1,
        "aliases": [
            "东风螺"
        ]
    },
    {
        "name": "黄麻叶 (鲜)",
        "kcalPer100": 177,
        "proteinPer100": 4.7,
        "carbsPer100": 5.8,
        "fatPer100": 0.3
    },
    {
        "name": "黄米",
        "kcalPer100": 351,
        "proteinPer100": 9.7,
        "carbsPer100": 76.9,
        "fatPer100": 1.5
    },
    {
        "name": "黄蘑 (干)",
        "kcalPer100": 203,
        "proteinPer100": 16.4,
        "carbsPer100": 18.3,
        "fatPer100": 1.5
    },
    {
        "name": "黄蘑（水发）",
        "kcalPer100": 30,
        "proteinPer100": 4.3,
        "carbsPer100": 4.8,
        "fatPer100": 0.4
    },
    {
        "name": "黄皮果",
        "kcalPer100": 39,
        "proteinPer100": 1.6,
        "carbsPer100": 9.9,
        "fatPer100": 0.2
    },
    {
        "name": "黄伞菇（干)",
        "kcalPer100": 294,
        "proteinPer100": 22.8,
        "carbsPer100": 57.5,
        "fatPer100": 3.2,
        "aliases": [
            "多脂鳞伞",
            "黄丝菌"
        ]
    },
    {
        "name": "黄颡鱼",
        "kcalPer100": 124,
        "proteinPer100": 17.8,
        "carbsPer100": 7.1,
        "fatPer100": 2.7,
        "aliases": [
            "戈牙鱼",
            "黄鳍鱼"
        ]
    },
    {
        "name": "黄鳝",
        "kcalPer100": 89,
        "proteinPer100": 18,
        "carbsPer100": 1.2,
        "fatPer100": 1.4,
        "aliases": [
            "鳝鱼"
        ]
    },
    {
        "name": "黄鳝丝",
        "kcalPer100": 69,
        "proteinPer100": 15.4,
        "carbsPer100": 0,
        "fatPer100": 0.8
    },
    {
        "name": "黄香蕉苹果",
        "kcalPer100": 53,
        "proteinPer100": 0.3,
        "carbsPer100": 13.7,
        "fatPer100": 0.2
    },
    {
        "name": "黄油",
        "kcalPer100": 888,
        "proteinPer100": 1.4,
        "carbsPer100": 0,
        "fatPer100": 98
    },
    {
        "name": "黄油渣",
        "kcalPer100": 599,
        "proteinPer100": 11.1,
        "carbsPer100": 40,
        "fatPer100": 43.8
    },
    {
        "name": "黄鱼 (大黄花鱼)",
        "kcalPer100": 97,
        "proteinPer100": 17.7,
        "carbsPer100": 0.8,
        "fatPer100": 2.5
    },
    {
        "name": "黄鱼 (小黄花鱼)",
        "kcalPer100": 114,
        "proteinPer100": 17,
        "carbsPer100": 0,
        "fatPer100": 5.1
    },
    {
        "name": "黄元帅苹果",
        "kcalPer100": 59,
        "proteinPer100": 0.2,
        "carbsPer100": 14.7,
        "fatPer100": 0.3
    },
    {
        "name": "湟鱼",
        "kcalPer100": 124,
        "proteinPer100": 17.1,
        "carbsPer100": 6.7,
        "fatPer100": 3.2,
        "aliases": [
            "裸鲤鱼"
        ]
    },
    {
        "name": "回头鱼",
        "kcalPer100": 107,
        "proteinPer100": 14.5,
        "carbsPer100": 0.4,
        "fatPer100": 5.3
    },
    {
        "name": "茴香（鲜）",
        "kcalPer100": 27,
        "proteinPer100": 2.5,
        "carbsPer100": 4.2,
        "fatPer100": 0.4,
        "aliases": [
            "小茴香"
        ]
    },
    {
        "name": "火鸡盹",
        "kcalPer100": 91,
        "proteinPer100": 18.9,
        "carbsPer100": 3.2,
        "fatPer100": 0.3
    },
    {
        "name": "火鸡肝",
        "kcalPer100": 143,
        "proteinPer100": 20,
        "carbsPer100": 3.1,
        "fatPer100": 5.6
    },
    {
        "name": "火鸡腿 (熟)",
        "kcalPer100": 100,
        "proteinPer100": 16.7,
        "carbsPer100": 6.6,
        "fatPer100": 0.7
    },
    {
        "name": "火鸡胸脯肉",
        "kcalPer100": 103,
        "proteinPer100": 22.4,
        "carbsPer100": 2.8,
        "fatPer100": 0.2
    },
    {
        "name": "火龙果",
        "kcalPer100": 55,
        "proteinPer100": 1.1,
        "carbsPer100": 13.3,
        "fatPer100": 0.2,
        "aliases": [
            "仙蜜果",
            "红龙果"
        ]
    },
    {
        "name": "火腿 (宣威牌)",
        "kcalPer100": 565,
        "proteinPer100": 11.4,
        "carbsPer100": 3.7,
        "fatPer100": 56.1
    },
    {
        "name": "火腿（fat27g）",
        "kcalPer100": 330,
        "proteinPer100": 16,
        "carbsPer100": 4.9,
        "fatPer100": 27.4
    },
    {
        "name": "火腿(fat3g)",
        "kcalPer100": 99,
        "proteinPer100": 15.5,
        "carbsPer100": 1.7,
        "fatPer100": 3.4
    },
    {
        "name": "火腿肠",
        "kcalPer100": 212,
        "proteinPer100": 14,
        "carbsPer100": 15.6,
        "fatPer100": 10.4,
        "unitWeight": 50,
        "unitName": "根"
    },
    {
        "name": "火腿肠 (双汇牌)",
        "kcalPer100": 215,
        "proteinPer100": 12.1,
        "carbsPer100": 8.8,
        "fatPer100": 14.6
    },
    {
        "name": "火腿肠 (小泥肠)",
        "kcalPer100": 295,
        "proteinPer100": 11.3,
        "carbsPer100": 3.2,
        "fatPer100": 26.3
    },
    {
        "name": "火腿肠 (圆腿)",
        "kcalPer100": 139,
        "proteinPer100": 18.4,
        "carbsPer100": 1.6,
        "fatPer100": 6.5
    },
    {
        "name": "火腿肠（小红肠）",
        "kcalPer100": 280,
        "proteinPer100": 11.8,
        "carbsPer100": 6,
        "fatPer100": 23.2
    },
    {
        "name": "火腿肉（藏香猪）",
        "kcalPer100": 503,
        "proteinPer100": 29.1,
        "carbsPer100": 5,
        "fatPer100": 40.7
    },
    {
        "name": "火腿心全精肉 (雪舫蒋牌)",
        "kcalPer100": 322,
        "proteinPer100": 37,
        "carbsPer100": 0,
        "fatPer100": 19.3
    },
    {
        "name": "火腿心肉 (生，金云牌)",
        "kcalPer100": 528,
        "proteinPer100": 22.2,
        "carbsPer100": 0,
        "fatPer100": 48.8
    },
    {
        "name": "鸡 (代表值)",
        "kcalPer100": 145,
        "proteinPer100": 20.3,
        "carbsPer100": 0.9,
        "fatPer100": 6.7,
        "aliases": [
            "鸡"
        ]
    },
    {
        "name": "鸡 (乌骨鸡)",
        "kcalPer100": 111,
        "proteinPer100": 22.3,
        "carbsPer100": 0.3,
        "fatPer100": 2.3
    },
    {
        "name": "鸡(土鸡，家养)",
        "kcalPer100": 124,
        "proteinPer100": 20.8,
        "carbsPer100": 0,
        "fatPer100": 4.5
    },
    {
        "name": "鸡翅",
        "kcalPer100": 202,
        "proteinPer100": 19,
        "carbsPer100": 5.5,
        "fatPer100": 11.5
    },
    {
        "name": "鸡枞",
        "kcalPer100": 19,
        "proteinPer100": 2.5,
        "carbsPer100": 2.5,
        "fatPer100": 0.2,
        "aliases": [
            "蚁枞",
            "伞把菇",
            "鸡枞菌"
        ]
    },
    {
        "name": "鸡枞（干）",
        "kcalPer100": 297,
        "proteinPer100": 32.8,
        "carbsPer100": 44.8,
        "fatPer100": 3.7
    },
    {
        "name": "鸡枞（油炸）",
        "kcalPer100": 646,
        "proteinPer100": 4.8,
        "carbsPer100": 10.2,
        "fatPer100": 66.3,
        "aliases": [
            "油鸡枞"
        ]
    },
    {
        "name": "鸡枞花",
        "kcalPer100": 18,
        "proteinPer100": 2.3,
        "carbsPer100": 1.8,
        "fatPer100": 0.3
    },
    {
        "name": "鸡蛋 (白皮)",
        "kcalPer100": 138,
        "proteinPer100": 12.7,
        "carbsPer100": 1.5,
        "fatPer100": 9,
        "unitWeight": 50,
        "unitName": "个"
    },
    {
        "name": "鸡蛋 (藏鸡蛋)",
        "kcalPer100": 162,
        "proteinPer100": 12.6,
        "carbsPer100": 2.4,
        "fatPer100": 11.3
    },
    {
        "name": "鸡蛋 (代表值)",
        "kcalPer100": 139,
        "proteinPer100": 13.1,
        "carbsPer100": 2.4,
        "fatPer100": 8.6,
        "aliases": [
            "鸡蛋"
        ],
        "unitWeight": 50,
        "unitName": "个"
    },
    {
        "name": "鸡蛋 (红皮)",
        "kcalPer100": 143,
        "proteinPer100": 12.2,
        "carbsPer100": 0,
        "fatPer100": 10.5,
        "unitWeight": 50,
        "unitName": "个"
    },
    {
        "name": "鸡蛋 (土鸡)",
        "kcalPer100": 138,
        "proteinPer100": 14.4,
        "carbsPer100": 5.6,
        "fatPer100": 6.4,
        "unitWeight": 45,
        "unitName": "个"
    },
    {
        "name": "鸡蛋 (乌鸡蛋，绿皮)",
        "kcalPer100": 170,
        "proteinPer100": 12.6,
        "carbsPer100": 6.1,
        "fatPer100": 10.6,
        "unitWeight": 45,
        "unitName": "个"
    },
    {
        "name": "鸡蛋 (煮)",
        "kcalPer100": 143,
        "proteinPer100": 12.1,
        "carbsPer100": 0.1,
        "fatPer100": 10.5
    },
    {
        "name": "鸡蛋白",
        "kcalPer100": 60,
        "proteinPer100": 11.6,
        "carbsPer100": 3.1,
        "fatPer100": 0.1
    },
    {
        "name": "鸡蛋白 (乌骨鸡)",
        "kcalPer100": 44,
        "proteinPer100": 9.8,
        "carbsPer100": 1,
        "fatPer100": 0.1
    },
    {
        "name": "鸡蛋粉",
        "kcalPer100": 545,
        "proteinPer100": 43.4,
        "carbsPer100": 11.3,
        "fatPer100": 36.2,
        "aliases": [
            "全蛋粉"
        ]
    },
    {
        "name": "鸡蛋黄",
        "kcalPer100": 328,
        "proteinPer100": 15.2,
        "carbsPer100": 3.4,
        "fatPer100": 28.2
    },
    {
        "name": "鸡蛋黄(乌骨鸡）",
        "kcalPer100": 263,
        "proteinPer100": 15.2,
        "carbsPer100": 5.7,
        "fatPer100": 19.9
    },
    {
        "name": "鸡蛋黄粉",
        "kcalPer100": 644,
        "proteinPer100": 31.6,
        "carbsPer100": 5.3,
        "fatPer100": 55.1
    },
    {
        "name": "鸡盹",
        "kcalPer100": 118,
        "proteinPer100": 19.2,
        "carbsPer100": 4,
        "fatPer100": 2.8,
        "aliases": [
            "鸡胗"
        ]
    },
    {
        "name": "鸡肝",
        "kcalPer100": 121,
        "proteinPer100": 16.6,
        "carbsPer100": 2.8,
        "fatPer100": 4.8
    },
    {
        "name": "鸡肝（肉鸡）",
        "kcalPer100": 121,
        "proteinPer100": 16.7,
        "carbsPer100": 3.5,
        "fatPer100": 4.5
    },
    {
        "name": "鸡块 (带浆粉)",
        "kcalPer100": 206,
        "proteinPer100": 12.2,
        "carbsPer100": 18.8,
        "fatPer100": 9.1
    },
    {
        "name": "鸡毛菜",
        "kcalPer100": 19,
        "proteinPer100": 2.7,
        "carbsPer100": 2.6,
        "fatPer100": 0.2
    },
    {
        "name": "鸡内金",
        "kcalPer100": 359,
        "proteinPer100": 83.1,
        "carbsPer100": 3.8,
        "fatPer100": 1.3
    },
    {
        "name": "鸡腿",
        "kcalPer100": 146,
        "proteinPer100": 20.2,
        "carbsPer100": 0,
        "fatPer100": 7.2
    },
    {
        "name": "鸡腿菇（干）",
        "kcalPer100": 294,
        "proteinPer100": 26.7,
        "carbsPer100": 51.8,
        "fatPer100": 2,
        "aliases": [
            "毛头鬼伞"
        ]
    },
    {
        "name": "鸡心",
        "kcalPer100": 172,
        "proteinPer100": 15.9,
        "carbsPer100": 0.6,
        "fatPer100": 11.8
    },
    {
        "name": "鸡胸脯肉",
        "kcalPer100": 118,
        "proteinPer100": 24.6,
        "carbsPer100": 0.6,
        "fatPer100": 1.9
    },
    {
        "name": "鸡血",
        "kcalPer100": 49,
        "proteinPer100": 7.8,
        "carbsPer100": 4.1,
        "fatPer100": 0.2
    },
    {
        "name": "鸡油菌",
        "kcalPer100": 26,
        "proteinPer100": 2,
        "carbsPer100": 5.1,
        "fatPer100": 0.3,
        "aliases": [
            "黄丝菌",
            "杏菌"
        ]
    },
    {
        "name": "鸡爪",
        "kcalPer100": 254,
        "proteinPer100": 23.9,
        "carbsPer100": 2.7,
        "fatPer100": 16.4
    },
    {
        "name": "基围虾",
        "kcalPer100": 101,
        "proteinPer100": 18.2,
        "carbsPer100": 3.9,
        "fatPer100": 1.4
    },
    {
        "name": "荠菜（鲜）",
        "kcalPer100": 31,
        "proteinPer100": 2.9,
        "carbsPer100": 4.7,
        "fatPer100": 0.4,
        "aliases": [
            "蓟菜",
            "菱角菜"
        ]
    },
    {
        "name": "鲫鱼",
        "kcalPer100": 108,
        "proteinPer100": 17.1,
        "carbsPer100": 3.8,
        "fatPer100": 2.7,
        "aliases": [
            "喜头鱼",
            "海附鱼"
        ]
    },
    {
        "name": "佳轻欣脱脂牛奶）",
        "kcalPer100": 32,
        "proteinPer100": 3.9,
        "carbsPer100": 4.2,
        "fatPer100": 0
    },
    {
        "name": "茄子 (白皮、长)",
        "kcalPer100": 21,
        "proteinPer100": 1.3,
        "carbsPer100": 5.5,
        "fatPer100": 0.1
    },
    {
        "name": "茄子 (绿皮)",
        "kcalPer100": 28,
        "proteinPer100": 1,
        "carbsPer100": 5.2,
        "fatPer100": 0.6
    },
    {
        "name": "茄子 (紫皮、圆)",
        "kcalPer100": 23,
        "proteinPer100": 0.8,
        "carbsPer100": 5.3,
        "fatPer100": 0.2
    },
    {
        "name": "茄子（圆）",
        "kcalPer100": 32,
        "proteinPer100": 1.6,
        "carbsPer100": 6.7,
        "fatPer100": 0.2
    },
    {
        "name": "茄子（紫皮、长）",
        "kcalPer100": 18,
        "proteinPer100": 1.1,
        "carbsPer100": 4.8,
        "fatPer100": 0.1
    },
    {
        "name": "甲鱼蛋",
        "kcalPer100": 128,
        "proteinPer100": 12.5,
        "carbsPer100": 3,
        "fatPer100": 7.3
    },
    {
        "name": "尖嘴白",
        "kcalPer100": 137,
        "proteinPer100": 22.7,
        "carbsPer100": 4.1,
        "fatPer100": 3.3
    },
    {
        "name": "尖嘴鱼 (雅江冷水鱼)",
        "kcalPer100": 107,
        "proteinPer100": 17.1,
        "carbsPer100": 4.6,
        "fatPer100": 2.2
    },
    {
        "name": "煎炸粉",
        "kcalPer100": 331,
        "proteinPer100": 12.1,
        "carbsPer100": 0.7,
        "fatPer100": 73.6
    },
    {
        "name": "碱蓬（鲜）",
        "kcalPer100": 138,
        "proteinPer100": 2.8,
        "carbsPer100": 5.2,
        "fatPer100": 0.3,
        "aliases": [
            "棉蓬",
            "猪毛菜"
        ]
    },
    {
        "name": "箭鱼 (炸)",
        "kcalPer100": 271,
        "proteinPer100": 20.8,
        "carbsPer100": 10.7,
        "fatPer100": 16.1
    },
    {
        "name": "江虾",
        "kcalPer100": 87,
        "proteinPer100": 10.3,
        "carbsPer100": 9.3,
        "fatPer100": 0.9,
        "aliases": [
            "沼虾"
        ]
    },
    {
        "name": "姜(干)",
        "kcalPer100": 308,
        "proteinPer100": 9.1,
        "carbsPer100": 64,
        "fatPer100": 5.7
    },
    {
        "name": "姜（鲜）",
        "kcalPer100": 46,
        "proteinPer100": 1.3,
        "carbsPer100": 10.3,
        "fatPer100": 0.6,
        "aliases": [
            "黄姜"
        ]
    },
    {
        "name": "姜（子姜，鲜）",
        "kcalPer100": 21,
        "proteinPer100": 0.7,
        "carbsPer100": 3.7,
        "fatPer100": 0.6,
        "aliases": [
            "嫩姜"
        ]
    },
    {
        "name": "豇豆 (干)",
        "kcalPer100": 336,
        "proteinPer100": 19.3,
        "carbsPer100": 65.6,
        "fatPer100": 1.2
    },
    {
        "name": "豇豆 (煮)",
        "kcalPer100": 133,
        "proteinPer100": 9.5,
        "carbsPer100": 24,
        "fatPer100": 0.6
    },
    {
        "name": "豇豆（干，紫）",
        "kcalPer100": 329,
        "proteinPer100": 18.9,
        "carbsPer100": 65.8,
        "fatPer100": 0.4
    },
    {
        "name": "酱牛肉",
        "kcalPer100": 246,
        "proteinPer100": 31.4,
        "carbsPer100": 3.2,
        "fatPer100": 11.9
    },
    {
        "name": "酱排骨",
        "kcalPer100": 366,
        "proteinPer100": 21.7,
        "carbsPer100": 9.6,
        "fatPer100": 26.7
    },
    {
        "name": "酱鸭",
        "kcalPer100": 266,
        "proteinPer100": 18.9,
        "carbsPer100": 6.3,
        "fatPer100": 18.4
    },
    {
        "name": "酱鸭(加梅菜，罐头)",
        "kcalPer100": 253,
        "proteinPer100": 11.8,
        "carbsPer100": 2.5,
        "fatPer100": 21.7
    },
    {
        "name": "酱汁肉",
        "kcalPer100": 549,
        "proteinPer100": 15.5,
        "carbsPer100": 8.4,
        "fatPer100": 50.4
    },
    {
        "name": "酱肘子",
        "kcalPer100": 202,
        "proteinPer100": 29.6,
        "carbsPer100": 1.8,
        "fatPer100": 8.5
    },
    {
        "name": "较大婴儿和幼儿配方奶 粉（特选宝宝成长配方奶粉 2阶段）",
        "kcalPer100": 488,
        "proteinPer100": 22.5,
        "carbsPer100": 0.6,
        "fatPer100": 56
    },
    {
        "name": "较大婴儿配方奶粉（明治 珍爱宝较大婴儿和幼儿配方 奶粉）",
        "kcalPer100": 468,
        "proteinPer100": 18,
        "carbsPer100": 2,
        "fatPer100": 62.9
    },
    {
        "name": "节瓜",
        "kcalPer100": 14,
        "proteinPer100": 0.6,
        "carbsPer100": 1.2,
        "fatPer100": 3.4,
        "aliases": [
            "毛瓜"
        ]
    },
    {
        "name": "结球甘蓝(绿)",
        "kcalPer100": 17,
        "proteinPer100": 0.9,
        "carbsPer100": 4,
        "fatPer100": 0.2,
        "aliases": [
            "圆白菜"
        ]
    },
    {
        "name": "结球甘蓝（紫）",
        "kcalPer100": 25,
        "proteinPer100": 1.2,
        "carbsPer100": 6.2,
        "fatPer100": 0.2,
        "aliases": [
            "圆白菜"
        ]
    },
    {
        "name": "结球菊苣 (红)",
        "kcalPer100": 17,
        "proteinPer100": 1.8,
        "carbsPer100": 3.4,
        "fatPer100": 0.2
    },
    {
        "name": "芥菜（大叶，鲜）",
        "kcalPer100": 16,
        "proteinPer100": 1.8,
        "carbsPer100": 2,
        "fatPer100": 0.4,
        "aliases": [
            "盖菜"
        ]
    },
    {
        "name": "芥菜（茎用，鲜）",
        "kcalPer100": 13,
        "proteinPer100": 1.3,
        "carbsPer100": 2.8,
        "fatPer100": 0.2,
        "aliases": [
            "青头菜"
        ]
    },
    {
        "name": "芥菜（鲜）",
        "kcalPer100": 27,
        "proteinPer100": 2,
        "carbsPer100": 4.7,
        "fatPer100": 0.4,
        "aliases": [
            "雪里红",
            "雪菜"
        ]
    },
    {
        "name": "芥菜（小叶，鲜）",
        "kcalPer100": 26,
        "proteinPer100": 2.5,
        "carbsPer100": 3.6,
        "fatPer100": 0.4,
        "aliases": [
            "小芥菜"
        ]
    },
    {
        "name": "芥菜头",
        "kcalPer100": 36,
        "proteinPer100": 1.9,
        "carbsPer100": 7.4,
        "fatPer100": 0.2,
        "aliases": [
            "大头菜",
            "水芥"
        ]
    },
    {
        "name": "芥蓝",
        "kcalPer100": 24,
        "proteinPer100": 3.1,
        "carbsPer100": 4.1,
        "fatPer100": 0.3,
        "aliases": [
            "甘蓝菜",
            "盖蓝菜"
        ]
    },
    {
        "name": "金瓜",
        "kcalPer100": 15,
        "proteinPer100": 0.5,
        "carbsPer100": 0.7,
        "fatPer100": 3.4
    },
    {
        "name": "金红桃",
        "kcalPer100": 28,
        "proteinPer100": 0.7,
        "carbsPer100": 6.6,
        "fatPer100": 0.1
    },
    {
        "name": "金华火腿",
        "kcalPer100": 318,
        "proteinPer100": 16.4,
        "carbsPer100": 0.1,
        "fatPer100": 28
    },
    {
        "name": "金蝗鱼",
        "kcalPer100": 99,
        "proteinPer100": 18.7,
        "carbsPer100": 0,
        "fatPer100": 2.7
    },
    {
        "name": "金枪鱼 (盐水浸)",
        "kcalPer100": 99,
        "proteinPer100": 23.5,
        "carbsPer100": 0,
        "fatPer100": 0.6
    },
    {
        "name": "金枪鱼 (油浸)",
        "kcalPer100": 189,
        "proteinPer100": 27.1,
        "carbsPer100": 0,
        "fatPer100": 9
    },
    {
        "name": "金枪鱼肉",
        "kcalPer100": 102,
        "proteinPer100": 23.7,
        "carbsPer100": 1.1,
        "fatPer100": 0.3
    },
    {
        "name": "金鲨鱼翅 (干）",
        "kcalPer100": 350,
        "proteinPer100": 84.1,
        "carbsPer100": 2.3,
        "fatPer100": 0.5
    },
    {
        "name": "金丝瓜",
        "kcalPer100": 38,
        "proteinPer100": 3.3,
        "carbsPer100": 0.8,
        "fatPer100": 2.2,
        "aliases": [
            "裸瓣瓜"
        ]
    },
    {
        "name": "金塔寺瓜",
        "kcalPer100": 10,
        "proteinPer100": 0.6,
        "carbsPer100": 2,
        "fatPer100": 0.1
    },
    {
        "name": "金线鱼",
        "kcalPer100": 101,
        "proteinPer100": 18.6,
        "carbsPer100": 0,
        "fatPer100": 2.9,
        "aliases": [
            "红三鱼"
        ]
    },
    {
        "name": "金元帅苹果",
        "kcalPer100": 53,
        "proteinPer100": 0.2,
        "carbsPer100": 13.3,
        "fatPer100": 0.1
    },
    {
        "name": "金针菜（鲜）",
        "kcalPer100": 214,
        "proteinPer100": 19.4,
        "carbsPer100": 34.9,
        "fatPer100": 1.4,
        "aliases": [
            "黄花菜"
        ]
    },
    {
        "name": "金针菇（鲜）",
        "kcalPer100": 32,
        "proteinPer100": 2.4,
        "carbsPer100": 2.7,
        "fatPer100": 0.4,
        "aliases": [
            "智力菇"
        ]
    },
    {
        "name": "锦丰梨",
        "kcalPer100": 51,
        "proteinPer100": 0.2,
        "carbsPer100": 3.2,
        "fatPer100": 0.1
    },
    {
        "name": "京白梨",
        "kcalPer100": 57,
        "proteinPer100": 0.2,
        "carbsPer100": 1.4,
        "fatPer100": 0.5
    },
    {
        "name": "荆豆(干)",
        "kcalPer100": 407,
        "proteinPer100": 43.6,
        "carbsPer100": 28.5,
        "fatPer100": 14.3
    },
    {
        "name": "粳米 (标二)",
        "kcalPer100": 347,
        "proteinPer100": 0.6,
        "carbsPer100": 0.4,
        "fatPer100": 77.7
    },
    {
        "name": "粳米（标四）",
        "kcalPer100": 347,
        "proteinPer100": 0.7,
        "carbsPer100": 0.7,
        "fatPer100": 78.1
    },
    {
        "name": "粳米（小站稻米）",
        "kcalPer100": 346,
        "proteinPer100": 6.9,
        "carbsPer100": 79.2,
        "fatPer100": 0.7
    },
    {
        "name": "粳米饭 (蒸)",
        "kcalPer100": 118,
        "proteinPer100": 2.6,
        "carbsPer100": 26.2,
        "fatPer100": 0.3
    },
    {
        "name": "九节虾（鲜）",
        "kcalPer100": 90,
        "proteinPer100": 21.4,
        "carbsPer100": 0.8,
        "fatPer100": 0.1
    },
    {
        "name": "韭菜",
        "kcalPer100": 25,
        "proteinPer100": 2.4,
        "carbsPer100": 4.5,
        "fatPer100": 0.4
    },
    {
        "name": "韭墓",
        "kcalPer100": 37,
        "proteinPer100": 2.2,
        "carbsPer100": 7.8,
        "fatPer100": 0.1
    },
    {
        "name": "酒枣",
        "kcalPer100": 148,
        "proteinPer100": 1.6,
        "carbsPer100": 1.4,
        "fatPer100": 0.2
    },
    {
        "name": "菊苣",
        "kcalPer100": 19,
        "proteinPer100": 1.3,
        "carbsPer100": 3.4,
        "fatPer100": 0.2
    },
    {
        "name": "橘 (金橘）",
        "kcalPer100": 58,
        "proteinPer100": 1,
        "carbsPer100": 13.7,
        "fatPer100": 0.2,
        "aliases": [
            "金枣"
        ]
    },
    {
        "name": "橘（四川红橘）",
        "kcalPer100": 42,
        "proteinPer100": 0.7,
        "carbsPer100": 9.8,
        "fatPer100": 0.1
    },
    {
        "name": "橘饼",
        "kcalPer100": 371,
        "proteinPer100": 0.6,
        "carbsPer100": 92.9,
        "fatPer100": 0.4
    },
    {
        "name": "橘柑子",
        "kcalPer100": 44,
        "proteinPer100": 0.8,
        "carbsPer100": 10.2,
        "fatPer100": 0.1,
        "aliases": [
            "宽皮桂"
        ]
    },
    {
        "name": "锯缘青蟹",
        "kcalPer100": 80,
        "proteinPer100": 14.6,
        "carbsPer100": 1.7,
        "fatPer100": 1.6,
        "aliases": [
            "青蟹"
        ]
    },
    {
        "name": "锯缘青蟹 (公，鲜)",
        "kcalPer100": 126,
        "proteinPer100": 16.7,
        "carbsPer100": 3.1,
        "fatPer100": 5.2
    },
    {
        "name": "锯缘青蟹(母，鲜)",
        "kcalPer100": 155,
        "proteinPer100": 17.3,
        "carbsPer100": 4.5,
        "fatPer100": 7.5
    },
    {
        "name": "蕨菜（鲜）",
        "kcalPer100": 177,
        "proteinPer100": 1.6,
        "carbsPer100": 1.8,
        "fatPer100": 9,
        "aliases": [
            "龙头菜",
            "如意菜"
        ]
    },
    {
        "name": "咖哩牛肉干",
        "kcalPer100": 326,
        "proteinPer100": 45.9,
        "carbsPer100": 29.5,
        "fatPer100": 2.7
    },
    {
        "name": "卡夫牌)",
        "kcalPer100": 80,
        "proteinPer100": 2.8,
        "carbsPer100": 10,
        "fatPer100": 3.2
    },
    {
        "name": "卡夫牌）",
        "kcalPer100": 79,
        "proteinPer100": 2.7,
        "carbsPer100": 10.3,
        "fatPer100": 3
    },
    {
        "name": "开心果 (熟)",
        "kcalPer100": 631,
        "proteinPer100": 20.6,
        "carbsPer100": 8.2,
        "fatPer100": 53
    },
    {
        "name": "抗浪鱼",
        "kcalPer100": 174,
        "proteinPer100": 16.6,
        "carbsPer100": 2.1,
        "fatPer100": 11
    },
    {
        "name": "烤麸",
        "kcalPer100": 121,
        "proteinPer100": 20.4,
        "carbsPer100": 9.3,
        "fatPer100": 0.3
    },
    {
        "name": "烤鸭 (老唐牌)",
        "kcalPer100": 309,
        "proteinPer100": 20.3,
        "carbsPer100": 0,
        "fatPer100": 25.3
    },
    {
        "name": "烤鸭 (全聚德牌)",
        "kcalPer100": 530,
        "proteinPer100": 18.1,
        "carbsPer100": 0,
        "fatPer100": 50.8
    },
    {
        "name": "空锅饼",
        "kcalPer100": 278,
        "proteinPer100": 8.6,
        "carbsPer100": 60.9,
        "fatPer100": 0.2
    },
    {
        "name": "口蘑（白蘑）",
        "kcalPer100": 277,
        "proteinPer100": 38.7,
        "carbsPer100": 17.2,
        "fatPer100": 3.3
    },
    {
        "name": "口头鱼",
        "kcalPer100": 134,
        "proteinPer100": 19.6,
        "carbsPer100": 4.5,
        "fatPer100": 4.2
    },
    {
        "name": "口虾站",
        "kcalPer100": 82,
        "proteinPer100": 14.8,
        "carbsPer100": 1.8,
        "fatPer100": 1.7,
        "aliases": [
            "皮皮虾"
        ]
    },
    {
        "name": "苦菜",
        "kcalPer100": 46,
        "proteinPer100": 2.8,
        "carbsPer100": 10,
        "fatPer100": 0.6,
        "aliases": [
            "节节花",
            "拒马菜"
        ]
    },
    {
        "name": "苦瓜（鲜）",
        "kcalPer100": 22,
        "proteinPer100": 1,
        "carbsPer100": 1.4,
        "fatPer100": 4.9,
        "aliases": [
            "凉瓜",
            "癫瓜"
        ]
    },
    {
        "name": "苦苣菜",
        "kcalPer100": 136,
        "proteinPer100": 3.1,
        "carbsPer100": 1.7,
        "fatPer100": 4.5,
        "aliases": [
            "苦菜",
            "天精菜"
        ]
    },
    {
        "name": "苦苦菜 (鲜)",
        "kcalPer100": 174,
        "proteinPer100": 2.5,
        "carbsPer100": 6.8,
        "fatPer100": 0.9
    },
    {
        "name": "库尔勒香梨",
        "kcalPer100": 42,
        "proteinPer100": 0.1,
        "carbsPer100": 6.7,
        "fatPer100": 0.1
    },
    {
        "name": "葵花子 (炒，咸)",
        "kcalPer100": 625,
        "proteinPer100": 22.6,
        "carbsPer100": 17.3,
        "fatPer100": 52.8
    },
    {
        "name": "葵花子 (熟，奶油香)",
        "kcalPer100": 620,
        "proteinPer100": 22.7,
        "carbsPer100": 17.9,
        "fatPer100": 54.1
    },
    {
        "name": "葵花子(生)",
        "kcalPer100": 609,
        "proteinPer100": 23.9,
        "carbsPer100": 19.1,
        "fatPer100": 49.9
    },
    {
        "name": "葵花子（熟，原味）",
        "kcalPer100": 591,
        "proteinPer100": 28.5,
        "carbsPer100": 15.1,
        "fatPer100": 49
    },
    {
        "name": "葵花子仁",
        "kcalPer100": 615,
        "proteinPer100": 19.1,
        "carbsPer100": 16.7,
        "fatPer100": 53.4
    },
    {
        "name": "腊肠",
        "kcalPer100": 584,
        "proteinPer100": 22,
        "carbsPer100": 15.3,
        "fatPer100": 48.3
    },
    {
        "name": "腊鹅",
        "kcalPer100": 410,
        "proteinPer100": 24.6,
        "carbsPer100": 29.6,
        "fatPer100": 21.5
    },
    {
        "name": "腊肉 (培根)",
        "kcalPer100": 181,
        "proteinPer100": 22.3,
        "carbsPer100": 2.6,
        "fatPer100": 9
    },
    {
        "name": "腊肉(生，fat49g)",
        "kcalPer100": 498,
        "proteinPer100": 11.8,
        "carbsPer100": 2.9,
        "fatPer100": 48.8
    },
    {
        "name": "腊肉（生，fat68g)",
        "kcalPer100": 692,
        "proteinPer100": 18.2,
        "carbsPer100": 1.8,
        "fatPer100": 68
    },
    {
        "name": "腊羊肉",
        "kcalPer100": 246,
        "proteinPer100": 26.1,
        "carbsPer100": 11.5,
        "fatPer100": 10.6
    },
    {
        "name": "辣椒 (红，尖，干)",
        "kcalPer100": 295,
        "proteinPer100": 15,
        "carbsPer100": 52.7,
        "fatPer100": 12
    },
    {
        "name": "辣椒（红，小）",
        "kcalPer100": 38,
        "proteinPer100": 1.3,
        "carbsPer100": 8.9,
        "fatPer100": 0.4
    },
    {
        "name": "辣椒(小红尖辣椒）",
        "kcalPer100": 62,
        "proteinPer100": 4.1,
        "carbsPer100": 17.7,
        "fatPer100": 0.4
    },
    {
        "name": "莱阳梨",
        "kcalPer100": 54,
        "proteinPer100": 0.3,
        "carbsPer100": 2.6,
        "fatPer100": 0.2
    },
    {
        "name": "蓝",
        "kcalPer100": 32,
        "proteinPer100": 1.3,
        "carbsPer100": 7,
        "fatPer100": 0.2,
        "aliases": [
            "玉蔓菁",
            "球茎甘蓝",
            "大头菜"
        ]
    },
    {
        "name": "蓝鳃太阳鱼",
        "kcalPer100": 93,
        "proteinPer100": 17.8,
        "carbsPer100": 0.3,
        "fatPer100": 2.3
    },
    {
        "name": "老年保健肉松",
        "kcalPer100": 458,
        "proteinPer100": 35.8,
        "carbsPer100": 32.5,
        "fatPer100": 20.5
    },
    {
        "name": "烙饼（标准粉）",
        "kcalPer100": 258,
        "proteinPer100": 7.5,
        "carbsPer100": 52.9,
        "fatPer100": 2.3
    },
    {
        "name": "乐陵枣",
        "kcalPer100": 233,
        "proteinPer100": 3.3,
        "carbsPer100": 8.8,
        "fatPer100": 0.6
    },
    {
        "name": "梨(巴梨)",
        "kcalPer100": 51,
        "proteinPer100": 0.4,
        "carbsPer100": 12.9,
        "fatPer100": 0.2
    },
    {
        "name": "梨(代表值）",
        "kcalPer100": 51,
        "proteinPer100": 0.3,
        "carbsPer100": 13.1,
        "fatPer100": 0.1,
        "aliases": [
            "梨"
        ],
        "unitWeight": 250,
        "unitName": "个"
    },
    {
        "name": "梨(糖水罐头)",
        "kcalPer100": 36,
        "proteinPer100": 0.5,
        "carbsPer100": 8.8,
        "fatPer100": 0.2
    },
    {
        "name": "藜麦（散装）",
        "kcalPer100": 357,
        "proteinPer100": 14,
        "carbsPer100": 57.8,
        "fatPer100": 6
    },
    {
        "name": "李子",
        "kcalPer100": 38,
        "proteinPer100": 0.7,
        "carbsPer100": 0.9,
        "fatPer100": 8.7
    },
    {
        "name": "李子杏",
        "kcalPer100": 37,
        "proteinPer100": 1,
        "carbsPer100": 1.1,
        "fatPer100": 8.6
    },
    {
        "name": "鲤鱼",
        "kcalPer100": 109,
        "proteinPer100": 17.6,
        "carbsPer100": 0.5,
        "fatPer100": 4.1,
        "aliases": [
            "鲤拐子"
        ]
    },
    {
        "name": "荔枝",
        "kcalPer100": 71,
        "proteinPer100": 0.9,
        "carbsPer100": 16.6,
        "fatPer100": 0.2
    },
    {
        "name": "荔枝 (干)",
        "kcalPer100": 328,
        "proteinPer100": 4.5,
        "carbsPer100": 77.4,
        "fatPer100": 1.2
    },
    {
        "name": "栗子",
        "kcalPer100": 186,
        "proteinPer100": 4.4,
        "carbsPer100": 2,
        "fatPer100": 1.6,
        "aliases": [
            "板栗"
        ]
    },
    {
        "name": "栗子（干）",
        "kcalPer100": 348,
        "proteinPer100": 5.3,
        "carbsPer100": 78.4,
        "fatPer100": 1.7,
        "aliases": [
            "板栗"
        ]
    },
    {
        "name": "栗子(熟）",
        "kcalPer100": 214,
        "proteinPer100": 4.8,
        "carbsPer100": 46,
        "fatPer100": 1.5,
        "aliases": [
            "板栗"
        ]
    },
    {
        "name": "栗子(鲜）",
        "kcalPer100": 188,
        "proteinPer100": 4.2,
        "carbsPer100": 42.2,
        "fatPer100": 0.7,
        "aliases": [
            "板栗"
        ]
    },
    {
        "name": "笠鱼",
        "kcalPer100": 97,
        "proteinPer100": 22.2,
        "carbsPer100": 0.9,
        "fatPer100": 0.5
    },
    {
        "name": "粒，草莓果粒/覆盆子果粒、 桃果粒/西番莲汁/菠萝果粒)",
        "kcalPer100": 111,
        "proteinPer100": 1.6,
        "carbsPer100": 19.9,
        "fatPer100": 2.8
    },
    {
        "name": "莲子 (干)",
        "kcalPer100": 350,
        "proteinPer100": 17.2,
        "carbsPer100": 67.2,
        "fatPer100": 2
    },
    {
        "name": "莲子 (糖水罐头)",
        "kcalPer100": 202,
        "proteinPer100": 2.8,
        "carbsPer100": 46.9,
        "fatPer100": 0.5
    },
    {
        "name": "鲢鱼",
        "kcalPer100": 104,
        "proteinPer100": 17.8,
        "carbsPer100": 0,
        "fatPer100": 3.6,
        "aliases": [
            "白鲢",
            "胖子",
            "连子鱼"
        ]
    },
    {
        "name": "炼乳(甜，罐头)",
        "kcalPer100": 332,
        "proteinPer100": 8,
        "carbsPer100": 55.4,
        "fatPer100": 8.7
    },
    {
        "name": "灵蜜瓜",
        "kcalPer100": 4,
        "proteinPer100": 0.5,
        "carbsPer100": 0.4,
        "fatPer100": 0.1
    },
    {
        "name": "菱白(鲜)",
        "kcalPer100": 26,
        "proteinPer100": 1.2,
        "carbsPer100": 5.9,
        "fatPer100": 0.2,
        "aliases": [
            "芡笋",
            "荧粑"
        ]
    },
    {
        "name": "菱角（老，鲜）",
        "kcalPer100": 101,
        "proteinPer100": 4.5,
        "carbsPer100": 21.4,
        "fatPer100": 0.1,
        "aliases": [
            "龙角"
        ]
    },
    {
        "name": "鲮鱼",
        "kcalPer100": 95,
        "proteinPer100": 18.4,
        "carbsPer100": 0.7,
        "fatPer100": 2.1,
        "aliases": [
            "雪鲮"
        ]
    },
    {
        "name": "鲮鱼 (罐头)",
        "kcalPer100": 399,
        "proteinPer100": 30.7,
        "carbsPer100": 8.5,
        "fatPer100": 26.9
    },
    {
        "name": "鲮鱼(豆豉，熟）",
        "kcalPer100": 472,
        "proteinPer100": 25.5,
        "carbsPer100": 17.9,
        "fatPer100": 33.1
    },
    {
        "name": "榴莲",
        "kcalPer100": 150,
        "proteinPer100": 2.6,
        "carbsPer100": 28.3,
        "fatPer100": 3.3
    },
    {
        "name": "龙豆（鲜）",
        "kcalPer100": 36,
        "proteinPer100": 3.7,
        "carbsPer100": 5,
        "fatPer100": 0.5
    },
    {
        "name": "龙虾",
        "kcalPer100": 90,
        "proteinPer100": 18.9,
        "carbsPer100": 1,
        "fatPer100": 1.1
    },
    {
        "name": "龙牙豆（鲜）",
        "kcalPer100": 19,
        "proteinPer100": 2.6,
        "carbsPer100": 2.4,
        "fatPer100": 0.2,
        "aliases": [
            "玉豆"
        ]
    },
    {
        "name": "垅船豆 (鲜)",
        "kcalPer100": 36,
        "proteinPer100": 2,
        "carbsPer100": 6.8,
        "fatPer100": 0.4
    },
    {
        "name": "芦橘",
        "kcalPer100": 44,
        "proteinPer100": 0.6,
        "carbsPer100": 10.3,
        "fatPer100": 0.2
    },
    {
        "name": "芦笋 (紫)",
        "kcalPer100": 22,
        "proteinPer100": 2.7,
        "carbsPer100": 3.4,
        "fatPer100": 0.2
    },
    {
        "name": "芦笋(绿）",
        "kcalPer100": 19,
        "proteinPer100": 2.6,
        "carbsPer100": 3.3,
        "fatPer100": 0.1,
        "aliases": [
            "石刁柏",
            "龙须菜"
        ]
    },
    {
        "name": "鲈鱼",
        "kcalPer100": 105,
        "proteinPer100": 18.6,
        "carbsPer100": 0,
        "fatPer100": 3.4,
        "aliases": [
            "鲈花"
        ]
    },
    {
        "name": "卤猪杂",
        "kcalPer100": 186,
        "proteinPer100": 24.6,
        "carbsPer100": 11,
        "fatPer100": 4.8
    },
    {
        "name": "卤煮鸡",
        "kcalPer100": 212,
        "proteinPer100": 29.4,
        "carbsPer100": 5.8,
        "fatPer100": 7.9
    },
    {
        "name": "鹿肉 (养殖梅花鹿)",
        "kcalPer100": 92,
        "proteinPer100": 19.7,
        "carbsPer100": 0.3,
        "fatPer100": 1.3
    },
    {
        "name": "驴鞭",
        "kcalPer100": 143,
        "proteinPer100": 29.7,
        "carbsPer100": 4.3,
        "fatPer100": 0.8
    },
    {
        "name": "驴奶粉 (金驴龙奶）",
        "kcalPer100": 416,
        "proteinPer100": 14.8,
        "carbsPer100": 70.8,
        "fatPer100": 8.2
    },
    {
        "name": "驴奶粉（花麒牌，西域龙 驴奶粉）",
        "kcalPer100": 442,
        "proteinPer100": 20.1,
        "carbsPer100": 62.4,
        "fatPer100": 12.4
    },
    {
        "name": "驴奶粉(源西域牌，冻干特质)",
        "kcalPer100": 428,
        "proteinPer100": 19.3,
        "carbsPer100": 60,
        "fatPer100": 12.3
    },
    {
        "name": "驴肉 (酱)",
        "kcalPer100": 160,
        "proteinPer100": 33.7,
        "carbsPer100": 0,
        "fatPer100": 2.8
    },
    {
        "name": "驴肉 (卤)",
        "kcalPer100": 149,
        "proteinPer100": 27.2,
        "carbsPer100": 5.8,
        "fatPer100": 1.9
    },
    {
        "name": "驴肉 （五香）",
        "kcalPer100": 167,
        "proteinPer100": 28.2,
        "carbsPer100": 0,
        "fatPer100": 6
    },
    {
        "name": "驴肉 (煮)",
        "kcalPer100": 230,
        "proteinPer100": 27,
        "carbsPer100": 0,
        "fatPer100": 13.5
    },
    {
        "name": "绿豆饼",
        "kcalPer100": 122,
        "proteinPer100": 15.2,
        "carbsPer100": 12.7,
        "fatPer100": 1.2
    },
    {
        "name": "绿豆面",
        "kcalPer100": 341,
        "proteinPer100": 20.8,
        "carbsPer100": 65.8,
        "fatPer100": 0.7
    },
    {
        "name": "绿豆芽",
        "kcalPer100": 16,
        "proteinPer100": 0.1,
        "carbsPer100": 1.2,
        "fatPer100": 2.6
    },
    {
        "name": "绿鳍马面",
        "kcalPer100": 83,
        "proteinPer100": 18.1,
        "carbsPer100": 1.2,
        "fatPer100": 0.6,
        "aliases": [
            "面包鱼",
            "橡皮鱼"
        ]
    },
    {
        "name": "罗非鱼",
        "kcalPer100": 98,
        "proteinPer100": 18.4,
        "carbsPer100": 2.8,
        "fatPer100": 1.5
    },
    {
        "name": "罗非鱼（莫桑比克）",
        "kcalPer100": 77,
        "proteinPer100": 16,
        "carbsPer100": 1,
        "fatPer100": 1,
        "aliases": [
            "非洲",
            "黑鲫鱼"
        ]
    },
    {
        "name": "萝卜",
        "kcalPer100": 18,
        "proteinPer100": 0.8,
        "carbsPer100": 4.2,
        "fatPer100": 0.1,
        "aliases": [
            "红皮萝卜"
        ]
    },
    {
        "name": "萝卜缨(白)",
        "kcalPer100": 17,
        "proteinPer100": 2.6,
        "carbsPer100": 1.7,
        "fatPer100": 0.3
    },
    {
        "name": "萝卜缨（青）",
        "kcalPer100": 38,
        "proteinPer100": 3.1,
        "carbsPer100": 7.6,
        "fatPer100": 0.1
    },
    {
        "name": "萝卜缨(小萝卜）",
        "kcalPer100": 23,
        "proteinPer100": 1.6,
        "carbsPer100": 4.1,
        "fatPer100": 0.3
    },
    {
        "name": "螺（代表值）",
        "kcalPer100": 100,
        "proteinPer100": 15.7,
        "carbsPer100": 6.6,
        "fatPer100": 1.2,
        "aliases": [
            "螺"
        ]
    },
    {
        "name": "螺蛳",
        "kcalPer100": 59,
        "proteinPer100": 7.5,
        "carbsPer100": 6,
        "fatPer100": 0.6
    },
    {
        "name": "螺旋藻（干）",
        "kcalPer100": 358,
        "proteinPer100": 64.7,
        "carbsPer100": 18.2,
        "fatPer100": 3.1
    },
    {
        "name": "骆驼蹄",
        "kcalPer100": 116,
        "proteinPer100": 25.6,
        "carbsPer100": 0.2,
        "fatPer100": 1.4
    },
    {
        "name": "骆驼掌",
        "kcalPer100": 310,
        "proteinPer100": 72.8,
        "carbsPer100": 0.3,
        "fatPer100": 2
    },
    {
        "name": "落葵",
        "kcalPer100": 23,
        "proteinPer100": 1.6,
        "carbsPer100": 4.3,
        "fatPer100": 0.3,
        "aliases": [
            "木耳菜",
            "软浆菜"
        ]
    },
    {
        "name": "麻醉瓜",
        "kcalPer100": 17,
        "proteinPer100": 0.7,
        "carbsPer100": 3.6,
        "fatPer100": 0.1
    },
    {
        "name": "马齿苋（鲜)",
        "kcalPer100": 117,
        "proteinPer100": 2.3,
        "carbsPer100": 3.9,
        "fatPer100": 0.5,
        "aliases": [
            "长寿菜",
            "瓜子菜"
        ]
    },
    {
        "name": "马兰头(鲜)马兰,鸡儿肠， 路边菊]",
        "kcalPer100": 119,
        "proteinPer100": 2.4,
        "carbsPer100": 4.6,
        "fatPer100": 0.4
    },
    {
        "name": "马铃薯",
        "kcalPer100": 81,
        "proteinPer100": 2.6,
        "carbsPer100": 17.8,
        "fatPer100": 0.2,
        "aliases": [
            "土豆",
            "洋芋"
        ]
    },
    {
        "name": "马铃薯 (烤)",
        "kcalPer100": 70,
        "proteinPer100": 1.8,
        "carbsPer100": 16.4,
        "fatPer100": 0.1
    },
    {
        "name": "马铃薯丁 (脱水)",
        "kcalPer100": 344,
        "proteinPer100": 5.7,
        "carbsPer100": 80.7,
        "fatPer100": 0.5
    },
    {
        "name": "马铃薯全粉",
        "kcalPer100": 362,
        "proteinPer100": 8.4,
        "carbsPer100": 82.7,
        "fatPer100": 0.5
    },
    {
        "name": "马鹿胎 (粉)",
        "kcalPer100": 342,
        "proteinPer100": 36.8,
        "carbsPer100": 24.4,
        "fatPer100": 10.8
    },
    {
        "name": "马肉",
        "kcalPer100": 122,
        "proteinPer100": 20.1,
        "carbsPer100": 0.1,
        "fatPer100": 4.6
    },
    {
        "name": "马肉 （卤）",
        "kcalPer100": 170,
        "proteinPer100": 30.5,
        "carbsPer100": 1.2,
        "fatPer100": 4.8
    },
    {
        "name": "马蹄黄梨",
        "kcalPer100": 50,
        "proteinPer100": 0.3,
        "carbsPer100": 1.3,
        "fatPer100": 0.1
    },
    {
        "name": "马心",
        "kcalPer100": 104,
        "proteinPer100": 18.9,
        "carbsPer100": 1,
        "fatPer100": 2.7
    },
    {
        "name": "麦瓶草（鲜）",
        "kcalPer100": 159,
        "proteinPer100": 4.5,
        "carbsPer100": 4.4,
        "fatPer100": 0.5,
        "aliases": [
            "米瓦罐"
        ]
    },
    {
        "name": "馒头 (标准粉)",
        "kcalPer100": 236,
        "proteinPer100": 7.8,
        "carbsPer100": 49.8,
        "fatPer100": 1
    },
    {
        "name": "馒头 (代表值）",
        "kcalPer100": 223,
        "proteinPer100": 7,
        "carbsPer100": 47,
        "fatPer100": 1.1,
        "aliases": [
            "馒头"
        ],
        "unitWeight": 100,
        "unitName": "个"
    },
    {
        "name": "馒头（富强粉）",
        "kcalPer100": 235,
        "proteinPer100": 7.1,
        "carbsPer100": 50.9,
        "fatPer100": 1.3
    },
    {
        "name": "鳗",
        "kcalPer100": 181,
        "proteinPer100": 18.6,
        "carbsPer100": 2.3,
        "fatPer100": 10.8,
        "aliases": [
            "鳗鱼",
            "河鳗"
        ]
    },
    {
        "name": "鳗鱼 (红烧)",
        "kcalPer100": 211,
        "proteinPer100": 21.3,
        "carbsPer100": 9.5,
        "fatPer100": 9.8
    },
    {
        "name": "芒果",
        "kcalPer100": 35,
        "proteinPer100": 0.6,
        "carbsPer100": 8.3,
        "fatPer100": 0.2,
        "aliases": [
            "抹猛果",
            "望果"
        ]
    },
    {
        "name": "芒果 (大头)",
        "kcalPer100": 52,
        "proteinPer100": 0.5,
        "carbsPer100": 12.9,
        "fatPer100": 0.1
    },
    {
        "name": "毛蛋",
        "kcalPer100": 176,
        "proteinPer100": 14.2,
        "carbsPer100": 0,
        "fatPer100": 13.2
    },
    {
        "name": "毛豆（鲜）",
        "kcalPer100": 131,
        "proteinPer100": 13.1,
        "carbsPer100": 10.5,
        "fatPer100": 5,
        "aliases": [
            "青豆",
            "菜用大豆"
        ]
    },
    {
        "name": "毛核桃",
        "kcalPer100": 184,
        "proteinPer100": 12,
        "carbsPer100": 21.7,
        "fatPer100": 6.7
    },
    {
        "name": "毛笋（鲜）",
        "kcalPer100": 23,
        "proteinPer100": 2.2,
        "carbsPer100": 3.8,
        "fatPer100": 0.2,
        "aliases": [
            "毛竹笋"
        ]
    },
    {
        "name": "眉豆（干）",
        "kcalPer100": 334,
        "proteinPer100": 18.6,
        "carbsPer100": 65.6,
        "fatPer100": 1.1,
        "aliases": [
            "饭虹豆"
        ]
    },
    {
        "name": "梅",
        "kcalPer100": 34,
        "proteinPer100": 0.9,
        "carbsPer100": 1,
        "fatPer100": 6.2,
        "aliases": [
            "青梅"
        ]
    },
    {
        "name": "梅花参 (泡发)",
        "kcalPer100": 73,
        "proteinPer100": 11.7,
        "carbsPer100": 4.5,
        "fatPer100": 0.9
    },
    {
        "name": "梅童鱼",
        "kcalPer100": 121,
        "proteinPer100": 18.9,
        "carbsPer100": 0,
        "fatPer100": 5,
        "aliases": [
            "大头仔鱼",
            "丁珠鱼"
        ]
    },
    {
        "name": "迷你黄瓜",
        "kcalPer100": 14,
        "proteinPer100": 1,
        "carbsPer100": 2.5,
        "fatPer100": 0.2,
        "aliases": [
            "荷兰乳黄瓜"
        ]
    },
    {
        "name": "米饭（蒸，代表值）",
        "kcalPer100": 116,
        "proteinPer100": 2.6,
        "carbsPer100": 25.9,
        "fatPer100": 0.3
    },
    {
        "name": "米粉",
        "kcalPer100": 349,
        "proteinPer100": 0.4,
        "carbsPer100": 85.8,
        "fatPer100": 0.8
    },
    {
        "name": "米粉 (金装核桃营养米粉)",
        "kcalPer100": 384,
        "proteinPer100": 7.5,
        "carbsPer100": 85,
        "fatPer100": 1.5
    },
    {
        "name": "米粉 (圣元营养米粉1段)",
        "kcalPer100": 431,
        "proteinPer100": 5,
        "carbsPer100": 5,
        "fatPer100": 92
    },
    {
        "name": "米粉（嘉宝燕麦营养米粉3 阶段）",
        "kcalPer100": 382,
        "proteinPer100": 9.5,
        "carbsPer100": 84.5,
        "fatPer100": 1.5
    },
    {
        "name": "米粉(嘉宝营养米粉1阶段)",
        "kcalPer100": 386,
        "proteinPer100": 6.4,
        "carbsPer100": 87,
        "fatPer100": 1.9
    },
    {
        "name": "米粉（金装宝贝营养菠菜营 养米粉）",
        "kcalPer100": 385,
        "proteinPer100": 6.4,
        "carbsPer100": 87,
        "fatPer100": 1.9
    },
    {
        "name": "米粉（金装宝贝营养钙铁锌 营养米粉）",
        "kcalPer100": 386,
        "proteinPer100": 6.4,
        "carbsPer100": 87,
        "fatPer100": 1.9
    },
    {
        "name": "米粉（金装宝贝营养什锦水 果营养米粉)",
        "kcalPer100": 385,
        "proteinPer100": 6.2,
        "carbsPer100": 87.2,
        "fatPer100": 1.9
    },
    {
        "name": "米粉（金装宝贝营养西红柿 牛肉营养米粉）",
        "kcalPer100": 386,
        "proteinPer100": 7.2,
        "carbsPer100": 86.2,
        "fatPer100": 1.9
    },
    {
        "name": "米粉(金装胡萝卜营养米粉)",
        "kcalPer100": 384,
        "proteinPer100": 6.5,
        "carbsPer100": 86,
        "fatPer100": 1.5
    },
    {
        "name": "米粉(金装牛肉菠菜营养米粉)",
        "kcalPer100": 384,
        "proteinPer100": 7.5,
        "carbsPer100": 85,
        "fatPer100": 1.5
    },
    {
        "name": "米粉（金装三文鱼胡萝卜营 养米粉)",
        "kcalPer100": 384,
        "proteinPer100": 7.5,
        "carbsPer100": 85,
        "fatPer100": 1.5
    },
    {
        "name": "米粉(金装锌铁钙营养米粉)",
        "kcalPer100": 384,
        "proteinPer100": 7.5,
        "carbsPer100": 85,
        "fatPer100": 1.5
    },
    {
        "name": "米粉(金装猪肝蔬菜营养米粉）",
        "kcalPer100": 384,
        "proteinPer100": 7.5,
        "carbsPer100": 85,
        "fatPer100": 1.5
    },
    {
        "name": "米粉（圣元淮山薏米营养米 粉2段)",
        "kcalPer100": 431,
        "proteinPer100": 5,
        "carbsPer100": 5,
        "fatPer100": 92
    },
    {
        "name": "米粉（圣元鸡肉香菇营养米 粉3段）",
        "kcalPer100": 433,
        "proteinPer100": 5,
        "carbsPer100": 5,
        "fatPer100": 92
    },
    {
        "name": "米粉（圣元乳清蛋白营养米 粉2段)",
        "kcalPer100": 408,
        "proteinPer100": 2,
        "carbsPer100": 5,
        "fatPer100": 87
    },
    {
        "name": "米粉（圣元什锦水果营养米 粉2段）",
        "kcalPer100": 431,
        "proteinPer100": 5,
        "carbsPer100": 5,
        "fatPer100": 92
    },
    {
        "name": "米粥（干）（方广鳕鱼胡萝 卜营养雪花粥)",
        "kcalPer100": 310,
        "proteinPer100": 2,
        "carbsPer100": 5,
        "fatPer100": 70
    },
    {
        "name": "密云小枣",
        "kcalPer100": 229,
        "proteinPer100": 3.9,
        "carbsPer100": 7.3,
        "fatPer100": 0.8
    },
    {
        "name": "蜜橘",
        "kcalPer100": 45,
        "proteinPer100": 0.8,
        "carbsPer100": 10.3,
        "fatPer100": 0.4
    },
    {
        "name": "蜜桃",
        "kcalPer100": 46,
        "proteinPer100": 0.6,
        "carbsPer100": 11,
        "fatPer100": 0.1
    },
    {
        "name": "蜜枣",
        "kcalPer100": 333,
        "proteinPer100": 1.3,
        "carbsPer100": 5.8,
        "fatPer100": 84.4,
        "aliases": [
            "椰枣"
        ]
    },
    {
        "name": "面蛋",
        "kcalPer100": 91,
        "proteinPer100": 1.6,
        "carbsPer100": 21.7,
        "fatPer100": 0.5
    },
    {
        "name": "面筋（肉馅）",
        "kcalPer100": 364,
        "proteinPer100": 16.2,
        "carbsPer100": 0.1,
        "fatPer100": 33.2
    },
    {
        "name": "面条（方广金装彩面核桃黑 芝麻蔬菜营养面)",
        "kcalPer100": 308,
        "proteinPer100": 6,
        "carbsPer100": 70,
        "fatPer100": 1.5
    },
    {
        "name": "面条（富强粉，切面）",
        "kcalPer100": 277,
        "proteinPer100": 8.9,
        "carbsPer100": 60.7,
        "fatPer100": 0.4,
        "aliases": [
            "面条"
        ]
    },
    {
        "name": "面条（富强粉，煮）",
        "kcalPer100": 107,
        "proteinPer100": 3.9,
        "carbsPer100": 22.8,
        "fatPer100": 0.4
    },
    {
        "name": "面条（亨氏金装粒粒面黑米 紫薯面）",
        "kcalPer100": 373,
        "proteinPer100": 11.2,
        "carbsPer100": 72,
        "fatPer100": 4.5
    },
    {
        "name": "明虾",
        "kcalPer100": 85,
        "proteinPer100": 13.4,
        "carbsPer100": 3.8,
        "fatPer100": 1.8
    },
    {
        "name": "明月梨",
        "kcalPer100": 54,
        "proteinPer100": 0.3,
        "carbsPer100": 0.9,
        "fatPer100": 0.2
    },
    {
        "name": "磨盘柿",
        "kcalPer100": 79,
        "proteinPer100": 0.7,
        "carbsPer100": 19.6,
        "fatPer100": 0.1
    },
    {
        "name": "蘑菇（鲜蘑）",
        "kcalPer100": 24,
        "proteinPer100": 2.7,
        "carbsPer100": 2.1,
        "fatPer100": 0.1
    },
    {
        "name": "魔芋精粉",
        "kcalPer100": 186,
        "proteinPer100": 4.6,
        "carbsPer100": 78.8,
        "fatPer100": 0.1,
        "aliases": [
            "鬼芋粉",
            "南星粉"
        ]
    },
    {
        "name": "墨鱼 (干，曼氏无针乌贼)",
        "kcalPer100": 287,
        "proteinPer100": 65.3,
        "carbsPer100": 2.1,
        "fatPer100": 1.9
    },
    {
        "name": "墨鱼 (干)",
        "kcalPer100": 313,
        "proteinPer100": 71.6,
        "carbsPer100": 4.2,
        "fatPer100": 1.1
    },
    {
        "name": "墨鱼 (鲜，曼氏无针乌贼)",
        "kcalPer100": 83,
        "proteinPer100": 15.2,
        "carbsPer100": 3.4,
        "fatPer100": 0.9
    },
    {
        "name": "墨鱼圈",
        "kcalPer100": 72,
        "proteinPer100": 13,
        "carbsPer100": 0,
        "fatPer100": 2.2
    },
    {
        "name": "墨鱼丸",
        "kcalPer100": 128,
        "proteinPer100": 13.4,
        "carbsPer100": 8,
        "fatPer100": 4.7
    },
    {
        "name": "母鸡 (一年内)",
        "kcalPer100": 256,
        "proteinPer100": 20.3,
        "carbsPer100": 5.8,
        "fatPer100": 16.8
    },
    {
        "name": "母麻鸭",
        "kcalPer100": 461,
        "proteinPer100": 13,
        "carbsPer100": 1.4,
        "fatPer100": 44.8
    },
    {
        "name": "牡蛎",
        "kcalPer100": 73,
        "proteinPer100": 5.3,
        "carbsPer100": 8.2,
        "fatPer100": 2.1,
        "aliases": [
            "海蛎子"
        ]
    },
    {
        "name": "木豆（干）",
        "kcalPer100": 348,
        "proteinPer100": 19.8,
        "carbsPer100": 58.8,
        "fatPer100": 4.5,
        "aliases": [
            "扭豆",
            "豆蓉"
        ]
    },
    {
        "name": "木耳（干）",
        "kcalPer100": 265,
        "proteinPer100": 12.1,
        "carbsPer100": 29.9,
        "fatPer100": 1.5,
        "aliases": [
            "黑木耳",
            "云耳"
        ]
    },
    {
        "name": "木耳（水发）",
        "kcalPer100": 27,
        "proteinPer100": 1.5,
        "carbsPer100": 2.6,
        "fatPer100": 0.2,
        "aliases": [
            "黑木耳",
            "云耳"
        ]
    },
    {
        "name": "木瓜",
        "kcalPer100": 29,
        "proteinPer100": 0.4,
        "carbsPer100": 7,
        "fatPer100": 0.1,
        "aliases": [
            "番木瓜"
        ]
    },
    {
        "name": "木梨",
        "kcalPer100": 32,
        "proteinPer100": 0.4,
        "carbsPer100": 1.9,
        "fatPer100": 0.1
    },
    {
        "name": "木薯",
        "kcalPer100": 119,
        "proteinPer100": 2.1,
        "carbsPer100": 27.8,
        "fatPer100": 0.3
    },
    {
        "name": "牧场脱脂牛奶)",
        "kcalPer100": 34,
        "proteinPer100": 3.3,
        "carbsPer100": 4,
        "fatPer100": 0.5
    },
    {
        "name": "奶疙瘩",
        "kcalPer100": 426,
        "proteinPer100": 55.1,
        "carbsPer100": 17.7,
        "fatPer100": 15,
        "aliases": [
            "奶酪干",
            "干酸奶"
        ]
    },
    {
        "name": "奶酪 (百嘉儿童干酪条)",
        "kcalPer100": 272,
        "proteinPer100": 25,
        "carbsPer100": 1.5,
        "fatPer100": 18.4
    },
    {
        "name": "奶酪 (光明牌)",
        "kcalPer100": 348,
        "proteinPer100": 16.5,
        "carbsPer100": 6.5,
        "fatPer100": 28.4
    },
    {
        "name": "奶酪 (骑士牌)",
        "kcalPer100": 386,
        "proteinPer100": 23,
        "carbsPer100": 16.3,
        "fatPer100": 25.4
    },
    {
        "name": "奶酪（多美鲜牌，欧洲奶 油奶酪)",
        "kcalPer100": 356,
        "proteinPer100": 13.1,
        "carbsPer100": 23.2,
        "fatPer100": 23.4
    },
    {
        "name": "奶酪（天润牌，无限欢酪）",
        "kcalPer100": 515,
        "proteinPer100": 3.5,
        "carbsPer100": 51,
        "fatPer100": 33
    },
    {
        "name": "奶米粉（亨氏强化铁锌钙营 养奶米粉辅食添加初期至36 个月适用）",
        "kcalPer100": 407,
        "proteinPer100": 5,
        "carbsPer100": 0.4,
        "fatPer100": 85.4
    },
    {
        "name": "奶皮子",
        "kcalPer100": 460,
        "proteinPer100": 12.2,
        "carbsPer100": 6.3,
        "fatPer100": 42.9
    },
    {
        "name": "奶片",
        "kcalPer100": 472,
        "proteinPer100": 13.3,
        "carbsPer100": 59.3,
        "fatPer100": 20.2
    },
    {
        "name": "奶柿子",
        "kcalPer100": 14,
        "proteinPer100": 0.6,
        "carbsPer100": 3.2,
        "fatPer100": 0.1,
        "aliases": [
            "西红柿"
        ]
    },
    {
        "name": "奶油",
        "kcalPer100": 879,
        "proteinPer100": 0.7,
        "carbsPer100": 0.9,
        "fatPer100": 97
    },
    {
        "name": "奶油 (焦克)",
        "kcalPer100": 447,
        "proteinPer100": 3,
        "carbsPer100": 0,
        "fatPer100": 48.3
    },
    {
        "name": "奶油 （食品工业）",
        "kcalPer100": 504,
        "proteinPer100": 1.1,
        "carbsPer100": 0,
        "fatPer100": 55.5
    },
    {
        "name": "南瓜 (栗面）",
        "kcalPer100": 36,
        "proteinPer100": 1.4,
        "carbsPer100": 8.8,
        "fatPer100": 0.1
    },
    {
        "name": "南瓜（鲜）",
        "kcalPer100": 23,
        "proteinPer100": 0.7,
        "carbsPer100": 0.8,
        "fatPer100": 5.3,
        "aliases": [
            "倭瓜",
            "番瓜"
        ]
    },
    {
        "name": "南瓜粉",
        "kcalPer100": 343,
        "proteinPer100": 7.1,
        "carbsPer100": 11.5,
        "fatPer100": 2.1
    },
    {
        "name": "南瓜藤",
        "kcalPer100": 17,
        "proteinPer100": 1.7,
        "carbsPer100": 3.2,
        "fatPer100": 0
    },
    {
        "name": "南瓜子（炒）",
        "kcalPer100": 582,
        "proteinPer100": 36,
        "carbsPer100": 7.9,
        "fatPer100": 46.1,
        "aliases": [
            "白瓜子"
        ]
    },
    {
        "name": "南瓜子(熟）",
        "kcalPer100": 615,
        "proteinPer100": 26.6,
        "carbsPer100": 12.9,
        "fatPer100": 52.8,
        "aliases": [
            "白瓜子"
        ]
    },
    {
        "name": "南瓜子仁",
        "kcalPer100": 576,
        "proteinPer100": 33.2,
        "carbsPer100": 4.9,
        "fatPer100": 48.1
    },
    {
        "name": "脑豆（干）",
        "kcalPer100": 363,
        "proteinPer100": 23.4,
        "carbsPer100": 59.6,
        "fatPer100": 3.8
    },
    {
        "name": "泥蚶",
        "kcalPer100": 71,
        "proteinPer100": 10,
        "carbsPer100": 6,
        "fatPer100": 0.8,
        "aliases": [
            "血蚶",
            "珠蚶"
        ]
    },
    {
        "name": "泥鳅",
        "kcalPer100": 96,
        "proteinPer100": 17.9,
        "carbsPer100": 1.7,
        "fatPer100": 2
    },
    {
        "name": "柠檬",
        "kcalPer100": 37,
        "proteinPer100": 1.1,
        "carbsPer100": 6.2,
        "fatPer100": 1.2
    },
    {
        "name": "牛百叶 (黑)",
        "kcalPer100": 70,
        "proteinPer100": 13.2,
        "carbsPer100": 0,
        "fatPer100": 1.9
    },
    {
        "name": "牛蒡叶（鲜）",
        "kcalPer100": 174,
        "proteinPer100": 4.7,
        "carbsPer100": 5.1,
        "fatPer100": 0.8
    },
    {
        "name": "牛鞭 (泡发)",
        "kcalPer100": 117,
        "proteinPer100": 27.2,
        "carbsPer100": 0,
        "fatPer100": 0.9
    },
    {
        "name": "牛初乳奶片（纽瑞滋牛初",
        "kcalPer100": 347,
        "proteinPer100": 27,
        "carbsPer100": 49.5,
        "fatPer100": 4.5
    },
    {
        "name": "牛大肠",
        "kcalPer100": 66,
        "proteinPer100": 11,
        "carbsPer100": 0.4,
        "fatPer100": 2.3
    },
    {
        "name": "牛肚",
        "kcalPer100": 72,
        "proteinPer100": 14.5,
        "carbsPer100": 0,
        "fatPer100": 1.6
    },
    {
        "name": "牛肺",
        "kcalPer100": 95,
        "proteinPer100": 16.5,
        "carbsPer100": 1.5,
        "fatPer100": 2.5
    },
    {
        "name": "牛肝",
        "kcalPer100": 139,
        "proteinPer100": 19.8,
        "carbsPer100": 6.2,
        "fatPer100": 3.9
    },
    {
        "name": "牛肝菌（白、干）美味牛肝菌]",
        "kcalPer100": 296,
        "proteinPer100": 27.8,
        "carbsPer100": 53.3,
        "fatPer100": 1.6
    },
    {
        "name": "牛肝菌（白）",
        "kcalPer100": 35,
        "proteinPer100": 4,
        "carbsPer100": 4.5,
        "fatPer100": 0.4,
        "aliases": [
            "美味牛肝菌"
        ]
    },
    {
        "name": "牛肝菌（黑）",
        "kcalPer100": 32,
        "proteinPer100": 3.6,
        "carbsPer100": 4.8,
        "fatPer100": 0.2,
        "aliases": [
            "铜色牛肝菌"
        ]
    },
    {
        "name": "牛肝菌（鲜）",
        "kcalPer100": 32,
        "proteinPer100": 4.3,
        "carbsPer100": 5.3,
        "fatPer100": 0.1,
        "aliases": [
            "黄皮牛肝菌",
            "黄皮疣柄牛肝菌",
            "黄癫头"
        ]
    },
    {
        "name": "牛黄",
        "kcalPer100": 353,
        "proteinPer100": 48,
        "carbsPer100": 38.4,
        "fatPer100": 0.9
    },
    {
        "name": "牛腱子 (香叶)",
        "kcalPer100": 205,
        "proteinPer100": 35.6,
        "carbsPer100": 3.2,
        "fatPer100": 5.5
    },
    {
        "name": "牛角江班蛤（鲜）",
        "kcalPer100": 49,
        "proteinPer100": 7.1,
        "carbsPer100": 4,
        "fatPer100": 0.5,
        "aliases": [
            "长带子"
        ]
    },
    {
        "name": "牛脑",
        "kcalPer100": 149,
        "proteinPer100": 12.5,
        "carbsPer100": 0.1,
        "fatPer100": 11
    },
    {
        "name": "牛肉",
        "kcalPer100": 193,
        "proteinPer100": 17.4,
        "carbsPer100": 3,
        "fatPer100": 12.4
    },
    {
        "name": "牛肉 (后腱)",
        "kcalPer100": 98,
        "proteinPer100": 20.1,
        "carbsPer100": 2.2,
        "fatPer100": 1
    },
    {
        "name": "牛肉 (酱，五香)",
        "kcalPer100": 229,
        "proteinPer100": 33.2,
        "carbsPer100": 0,
        "fatPer100": 10.7
    },
    {
        "name": "牛肉 (肋条)",
        "kcalPer100": 123,
        "proteinPer100": 18.6,
        "carbsPer100": 0,
        "fatPer100": 5.4
    },
    {
        "name": "牛肉 (前腱)",
        "kcalPer100": 113,
        "proteinPer100": 20.3,
        "carbsPer100": 5.1,
        "fatPer100": 1.3
    },
    {
        "name": "牛肉 (前腿)",
        "kcalPer100": 105,
        "proteinPer100": 19.2,
        "carbsPer100": 2.9,
        "fatPer100": 1.8
    },
    {
        "name": "牛肉 (清香)",
        "kcalPer100": 200,
        "proteinPer100": 25.8,
        "carbsPer100": 0,
        "fatPer100": 10.7
    },
    {
        "name": "牛肉（代表值，瘦，fat3g）",
        "kcalPer100": 113,
        "proteinPer100": 21.3,
        "carbsPer100": 1.3,
        "fatPer100": 2.5,
        "aliases": [
            "牛肉"
        ]
    },
    {
        "name": "牛肉（腹部肉）",
        "kcalPer100": 332,
        "proteinPer100": 17.1,
        "carbsPer100": 0,
        "fatPer100": 29.3,
        "aliases": [
            "牛腩"
        ]
    },
    {
        "name": "牛肉(股内肉)",
        "kcalPer100": 119,
        "proteinPer100": 22.8,
        "carbsPer100": 0.4,
        "fatPer100": 2.9,
        "aliases": [
            "针扒",
            "米龙",
            "黄瓜条"
        ]
    },
    {
        "name": "牛肉（后腿)",
        "kcalPer100": 106,
        "proteinPer100": 20.9,
        "carbsPer100": 1.1,
        "fatPer100": 2
    },
    {
        "name": "牛肉（肩部肉）",
        "kcalPer100": 342,
        "proteinPer100": 14.1,
        "carbsPer100": 0,
        "fatPer100": 31.7,
        "aliases": [
            "肩肉"
        ]
    },
    {
        "name": "牛肉（里脊肉）",
        "kcalPer100": 107,
        "proteinPer100": 22.2,
        "carbsPer100": 2.4,
        "fatPer100": 0.9,
        "aliases": [
            "牛柳"
        ]
    },
    {
        "name": "牛肉（臀部肉）",
        "kcalPer100": 117,
        "proteinPer100": 22.6,
        "carbsPer100": 0.9,
        "fatPer100": 2.6,
        "aliases": [
            "紫盖",
            "白板"
        ]
    },
    {
        "name": "牛肉（膝圆肉）",
        "kcalPer100": 106,
        "proteinPer100": 22.4,
        "carbsPer100": 0.1,
        "fatPer100": 1.8,
        "aliases": [
            "和尚头"
        ]
    },
    {
        "name": "牛肉(小腿肉)",
        "kcalPer100": 122,
        "proteinPer100": 23,
        "carbsPer100": 0,
        "fatPer100": 3.3,
        "aliases": [
            "牛展",
            "牛腱子"
        ]
    },
    {
        "name": "牛肉（胸部肉）",
        "kcalPer100": 326,
        "proteinPer100": 16.6,
        "carbsPer100": 0,
        "fatPer100": 28.8,
        "aliases": [
            "牛胸"
        ]
    },
    {
        "name": "牛肉干",
        "kcalPer100": 550,
        "proteinPer100": 45.6,
        "carbsPer100": 1.9,
        "fatPer100": 40
    },
    {
        "name": "牛肉干 (沙参牌)",
        "kcalPer100": 327,
        "proteinPer100": 40.1,
        "carbsPer100": 33.6,
        "fatPer100": 3.6
    },
    {
        "name": "牛肉干 (长富牌)",
        "kcalPer100": 342,
        "proteinPer100": 41.8,
        "carbsPer100": 32.2,
        "fatPer100": 5.1
    },
    {
        "name": "牛肉松",
        "kcalPer100": 445,
        "proteinPer100": 8.2,
        "carbsPer100": 67.7,
        "fatPer100": 15.7
    },
    {
        "name": "牛舌",
        "kcalPer100": 196,
        "proteinPer100": 17,
        "carbsPer100": 2,
        "fatPer100": 13.3
    },
    {
        "name": "牛肾",
        "kcalPer100": 94,
        "proteinPer100": 15.6,
        "carbsPer100": 2.6,
        "fatPer100": 2.4
    },
    {
        "name": "牛蹄筋 (熟)",
        "kcalPer100": 147,
        "proteinPer100": 35.2,
        "carbsPer100": 0.1,
        "fatPer100": 0.6
    },
    {
        "name": "牛蹄筋（生）",
        "kcalPer100": 151,
        "proteinPer100": 34.1,
        "carbsPer100": 2.6,
        "fatPer100": 0.5
    },
    {
        "name": "牛蛙",
        "kcalPer100": 81,
        "proteinPer100": 15.7,
        "carbsPer100": 3.4,
        "fatPer100": 0.5
    },
    {
        "name": "牛心",
        "kcalPer100": 106,
        "proteinPer100": 15.4,
        "carbsPer100": 3.1,
        "fatPer100": 3.5
    },
    {
        "name": "牛眼睛菌（鲜）",
        "kcalPer100": 41,
        "proteinPer100": 5.1,
        "carbsPer100": 6.6,
        "fatPer100": 0.3,
        "aliases": [
            "马勃菌"
        ]
    },
    {
        "name": "糯米",
        "kcalPer100": 350,
        "proteinPer100": 7.3,
        "carbsPer100": 78.3,
        "fatPer100": 1,
        "aliases": [
            "江米"
        ]
    },
    {
        "name": "藕",
        "kcalPer100": 47,
        "proteinPer100": 1.2,
        "carbsPer100": 11.5,
        "fatPer100": 0.2,
        "aliases": [
            "莲藕"
        ]
    },
    {
        "name": "爬景天（鲜）",
        "kcalPer100": 87,
        "proteinPer100": 0.6,
        "carbsPer100": 3.5,
        "fatPer100": 0.7,
        "aliases": [
            "石头菜"
        ]
    },
    {
        "name": "泡芙饼干) 饼干 (嘉宝香草圈圈饼干)",
        "kcalPer100": 17,
        "proteinPer100": 0,
        "carbsPer100": 3,
        "fatPer100": 0.5
    },
    {
        "name": "枇杷",
        "kcalPer100": 41,
        "proteinPer100": 0.8,
        "carbsPer100": 9.3,
        "fatPer100": 0.2
    },
    {
        "name": "瓢儿白",
        "kcalPer100": 18,
        "proteinPer100": 1.7,
        "carbsPer100": 3.2,
        "fatPer100": 0.2,
        "aliases": [
            "瓢儿菜"
        ]
    },
    {
        "name": "平菇",
        "kcalPer100": 24,
        "proteinPer100": 1.9,
        "carbsPer100": 2.3,
        "fatPer100": 0.3,
        "aliases": [
            "糙皮侧耳",
            "青蘑"
        ]
    },
    {
        "name": "平菇",
        "kcalPer100": 17,
        "proteinPer100": 1.7,
        "carbsPer100": 3.2,
        "fatPer100": 0.1,
        "aliases": [
            "糙皮侧耳",
            "青蘑"
        ]
    },
    {
        "name": "苹果（罐头）",
        "kcalPer100": 41,
        "proteinPer100": 0.2,
        "carbsPer100": 10.3,
        "fatPer100": 0.2
    },
    {
        "name": "苹果梨",
        "kcalPer100": 53,
        "proteinPer100": 0.2,
        "carbsPer100": 2.3,
        "fatPer100": 0.1
    },
    {
        "name": "鲆",
        "kcalPer100": 112,
        "proteinPer100": 20.8,
        "carbsPer100": 0,
        "fatPer100": 3.2,
        "aliases": [
            "片口鱼",
            "比目鱼"
        ]
    },
    {
        "name": "葡萄 (巨峰）",
        "kcalPer100": 51,
        "proteinPer100": 0.4,
        "carbsPer100": 12,
        "fatPer100": 0.2
    },
    {
        "name": "葡萄 (玫瑰香)",
        "kcalPer100": 52,
        "proteinPer100": 0.4,
        "carbsPer100": 12.1,
        "fatPer100": 0.4
    },
    {
        "name": "葡萄（代表值）",
        "kcalPer100": 45,
        "proteinPer100": 0.4,
        "carbsPer100": 10.3,
        "fatPer100": 0.3,
        "aliases": [
            "葡萄"
        ]
    },
    {
        "name": "葡萄(马奶子)",
        "kcalPer100": 41,
        "proteinPer100": 0.5,
        "carbsPer100": 9.1,
        "fatPer100": 0.4
    },
    {
        "name": "葡萄干",
        "kcalPer100": 344,
        "proteinPer100": 2.5,
        "carbsPer100": 83.4,
        "fatPer100": 0.4
    },
    {
        "name": "蒲菜(鲜",
        "kcalPer100": 14,
        "proteinPer100": 1.2,
        "carbsPer100": 2.4,
        "fatPer100": 0.1,
        "aliases": [
            "香蒲",
            "甘蒲",
            "野苓白"
        ]
    },
    {
        "name": "蒲公英叶（鲜）",
        "kcalPer100": 221,
        "proteinPer100": 4.8,
        "carbsPer100": 7,
        "fatPer100": 1.1,
        "aliases": [
            "黄花苗叶",
            "李李丁叶"
        ]
    },
    {
        "name": "蒲桃",
        "kcalPer100": 39,
        "proteinPer100": 0.5,
        "carbsPer100": 10.2,
        "fatPer100": 0.2
    },
    {
        "name": "普中红蘑（千）",
        "kcalPer100": 263,
        "proteinPer100": 18.4,
        "carbsPer100": 24.6,
        "fatPer100": 0.7
    },
    {
        "name": "鳍鱼",
        "kcalPer100": 413,
        "proteinPer100": 14.4,
        "carbsPer100": 0.2,
        "fatPer100": 39.4
    },
    {
        "name": "鳍鱼 (炸)",
        "kcalPer100": 550,
        "proteinPer100": 17.2,
        "carbsPer100": 0.1,
        "fatPer100": 53.4
    },
    {
        "name": "掐不齐(鲜)",
        "kcalPer100": 462,
        "proteinPer100": 6.1,
        "carbsPer100": 23.6,
        "fatPer100": 1.4,
        "aliases": [
            "鸡眼草",
            "牛黄草"
        ]
    },
    {
        "name": "千张",
        "kcalPer100": 262,
        "proteinPer100": 24.5,
        "carbsPer100": 5.5,
        "fatPer100": 16,
        "aliases": [
            "百页"
        ]
    },
    {
        "name": "钳鱼",
        "kcalPer100": 212,
        "proteinPer100": 29.2,
        "carbsPer100": 0.7,
        "fatPer100": 10.3
    },
    {
        "name": "芡实米（干）",
        "kcalPer100": 352,
        "proteinPer100": 8.3,
        "carbsPer100": 79.6,
        "fatPer100": 0.3,
        "aliases": [
            "鸡头米"
        ]
    },
    {
        "name": "芡实米（鲜）",
        "kcalPer100": 145,
        "proteinPer100": 4.4,
        "carbsPer100": 31.5,
        "fatPer100": 0.2,
        "aliases": [
            "鸡头米"
        ]
    },
    {
        "name": "荞菜（鲜）",
        "kcalPer100": 54,
        "proteinPer100": 0.7,
        "carbsPer100": 1.2,
        "fatPer100": 0.2,
        "aliases": [
            "野荞"
        ]
    },
    {
        "name": "翘嘴红（鲜）",
        "kcalPer100": 123,
        "proteinPer100": 18.1,
        "carbsPer100": 0.1,
        "fatPer100": 5.6
    },
    {
        "name": "芹菜（茎）",
        "kcalPer100": 13,
        "proteinPer100": 0.4,
        "carbsPer100": 3.1,
        "fatPer100": 0.2,
        "aliases": [
            "旱芹",
            "药芹"
        ]
    },
    {
        "name": "芹菜茎",
        "kcalPer100": 22,
        "proteinPer100": 1.2,
        "carbsPer100": 4.5,
        "fatPer100": 0.2
    },
    {
        "name": "芹菜叶（鲜）",
        "kcalPer100": 35,
        "proteinPer100": 2.6,
        "carbsPer100": 5.9,
        "fatPer100": 0.6
    },
    {
        "name": "青豆（干）",
        "kcalPer100": 398,
        "proteinPer100": 34.5,
        "carbsPer100": 35.4,
        "fatPer100": 16,
        "aliases": [
            "青大豆"
        ]
    },
    {
        "name": "青稞",
        "kcalPer100": 342,
        "proteinPer100": 8.1,
        "carbsPer100": 75,
        "fatPer100": 1.5
    },
    {
        "name": "青萝卜",
        "kcalPer100": 29,
        "proteinPer100": 1.2,
        "carbsPer100": 6.9,
        "fatPer100": 0.2
    },
    {
        "name": "青蒜 (青葱)",
        "kcalPer100": 34,
        "proteinPer100": 2.4,
        "carbsPer100": 6.2,
        "fatPer100": 0.3
    },
    {
        "name": "青头菌",
        "kcalPer100": 20,
        "proteinPer100": 2.7,
        "carbsPer100": 3.1,
        "fatPer100": 0.1,
        "aliases": [
            "变绿红菇",
            "绿菇"
        ]
    },
    {
        "name": "青虾",
        "kcalPer100": 100,
        "proteinPer100": 23.8,
        "carbsPer100": 0.2,
        "fatPer100": 0.4
    },
    {
        "name": "青香蕉苹果",
        "kcalPer100": 52,
        "proteinPer100": 0.3,
        "carbsPer100": 13.1,
        "fatPer100": 0.1
    },
    {
        "name": "青衣 (孔雀绿色)",
        "kcalPer100": 82,
        "proteinPer100": 19.2,
        "carbsPer100": 0.6,
        "fatPer100": 0.3
    },
    {
        "name": "青衣（红色）",
        "kcalPer100": 84,
        "proteinPer100": 20.1,
        "carbsPer100": 0.2,
        "fatPer100": 0.3
    },
    {
        "name": "青鱼",
        "kcalPer100": 118,
        "proteinPer100": 20.1,
        "carbsPer100": 0,
        "fatPer100": 4.2,
        "aliases": [
            "青皮鱼",
            "青鳞鱼",
            "青混"
        ]
    },
    {
        "name": "清明菜（鲜）",
        "kcalPer100": 206,
        "proteinPer100": 3.1,
        "carbsPer100": 8.9,
        "fatPer100": 0.6,
        "aliases": [
            "鼠曲菜"
        ]
    },
    {
        "name": "庆丰桃",
        "kcalPer100": 42,
        "proteinPer100": 0.6,
        "carbsPer100": 10.1,
        "fatPer100": 0.1
    },
    {
        "name": "琼海虾",
        "kcalPer100": 56,
        "proteinPer100": 8.9,
        "carbsPer100": 0.9,
        "fatPer100": 1.8
    },
    {
        "name": "琼脂",
        "kcalPer100": 311,
        "proteinPer100": 1.1,
        "carbsPer100": 76.3,
        "fatPer100": 0.2,
        "aliases": [
            "紫菜胶洋粉"
        ]
    },
    {
        "name": "秋黄瓜",
        "kcalPer100": 14,
        "proteinPer100": 0.9,
        "carbsPer100": 2.5,
        "fatPer100": 0.2,
        "aliases": [
            "旱黄瓜"
        ]
    },
    {
        "name": "秋葵",
        "kcalPer100": 25,
        "proteinPer100": 1.8,
        "carbsPer100": 1.8,
        "fatPer100": 6.2,
        "aliases": [
            "黄秋葵",
            "羊角豆"
        ]
    },
    {
        "name": "秋里蒙苹果",
        "kcalPer100": 43,
        "proteinPer100": 0.2,
        "carbsPer100": 11.9,
        "fatPer100": 0.2
    },
    {
        "name": "曲拉",
        "kcalPer100": 356,
        "proteinPer100": 39.1,
        "carbsPer100": 43.4,
        "fatPer100": 2.9
    },
    {
        "name": "全脂奶粉",
        "kcalPer100": 478,
        "proteinPer100": 20.1,
        "carbsPer100": 51.7,
        "fatPer100": 21.2
    },
    {
        "name": "全脂奶粉 (代表值）",
        "kcalPer100": 482,
        "proteinPer100": 19.9,
        "carbsPer100": 50.5,
        "fatPer100": 22.3,
        "aliases": [
            "全脂奶粉"
        ]
    },
    {
        "name": "全脂奶粉 (多维奶粉)",
        "kcalPer100": 484,
        "proteinPer100": 19.9,
        "carbsPer100": 49.9,
        "fatPer100": 22.7
    },
    {
        "name": "全脂奶粉 (全脂羊乳粉)",
        "kcalPer100": 498,
        "proteinPer100": 18.8,
        "carbsPer100": 49,
        "fatPer100": 25.2
    },
    {
        "name": "全脂奶粉 (速溶)",
        "kcalPer100": 466,
        "proteinPer100": 19.9,
        "carbsPer100": 54,
        "fatPer100": 18.9
    },
    {
        "name": "全脂奶粉(红星速溶加锌奶粉)",
        "kcalPer100": 478,
        "proteinPer100": 18.5,
        "carbsPer100": 54.1,
        "fatPer100": 20.8
    },
    {
        "name": "全脂奶粉（欧世蒙牛多维 高钙高铁奶粉）",
        "kcalPer100": 473,
        "proteinPer100": 18.2,
        "carbsPer100": 51.1,
        "fatPer100": 21.7
    },
    {
        "name": "全脂奶粉(雀巢)",
        "kcalPer100": 504,
        "proteinPer100": 24,
        "carbsPer100": 39,
        "fatPer100": 28
    },
    {
        "name": "全脂奶粉（雪花钙加锌调 制奶粉)",
        "kcalPer100": 461,
        "proteinPer100": 17,
        "carbsPer100": 55.5,
        "fatPer100": 19
    },
    {
        "name": "全脂奶粉（雪花高钙多维 调制奶粉）",
        "kcalPer100": 484,
        "proteinPer100": 19.5,
        "carbsPer100": 52,
        "fatPer100": 22
    },
    {
        "name": "全脂奶粉（伊利牌）",
        "kcalPer100": 504,
        "proteinPer100": 22,
        "carbsPer100": 45.5,
        "fatPer100": 26
    },
    {
        "name": "全脂甜炼乳 (雀巢)",
        "kcalPer100": 380,
        "proteinPer100": 7.5,
        "carbsPer100": 64.9,
        "fatPer100": 10
    },
    {
        "name": "全脂甜炼乳(燕山牌)",
        "kcalPer100": 374,
        "proteinPer100": 8.2,
        "carbsPer100": 62.8,
        "fatPer100": 10
    },
    {
        "name": "全脂甜奶粉",
        "kcalPer100": 490,
        "proteinPer100": 22.5,
        "carbsPer100": 47.4,
        "fatPer100": 23.4
    },
    {
        "name": "全脂甜奶粉 (代表值)",
        "kcalPer100": 485,
        "proteinPer100": 20.2,
        "carbsPer100": 49.6,
        "fatPer100": 22.9,
        "aliases": [
            "全脂甜奶粉"
        ]
    },
    {
        "name": "全脂甜奶粉 (伊利牌)",
        "kcalPer100": 476,
        "proteinPer100": 19,
        "carbsPer100": 52.8,
        "fatPer100": 21
    },
    {
        "name": "全脂甜奶粉（飞鹤全脂甜乳粉）",
        "kcalPer100": 479,
        "proteinPer100": 20,
        "carbsPer100": 48,
        "fatPer100": 23
    },
    {
        "name": "全脂甜奶粉（红星速溶全 脂甜奶粉)",
        "kcalPer100": 481,
        "proteinPer100": 18.5,
        "carbsPer100": 50,
        "fatPer100": 23
    },
    {
        "name": "全脂甜奶粉（三元燕山牌 全脂甜奶粉）",
        "kcalPer100": 500,
        "proteinPer100": 21,
        "carbsPer100": 50,
        "fatPer100": 24
    },
    {
        "name": "裙边 (干)",
        "kcalPer100": 337,
        "proteinPer100": 81.6,
        "carbsPer100": 0,
        "fatPer100": 1.2
    },
    {
        "name": "裙带菜(干)",
        "kcalPer100": 219,
        "proteinPer100": 25,
        "carbsPer100": 41.5,
        "fatPer100": 1.7,
        "aliases": [
            "海芥菜",
            "海木耳"
        ]
    },
    {
        "name": "热狗肠",
        "kcalPer100": 307,
        "proteinPer100": 13.2,
        "carbsPer100": 6.9,
        "fatPer100": 25.2
    },
    {
        "name": "人参果",
        "kcalPer100": 86,
        "proteinPer100": 0.6,
        "carbsPer100": 21.2,
        "fatPer100": 0.7
    },
    {
        "name": "人乳",
        "kcalPer100": 65,
        "proteinPer100": 1.3,
        "carbsPer100": 7.4,
        "fatPer100": 3.4
    },
    {
        "name": "人乳 (过渡乳，7～14天)",
        "kcalPer100": 73,
        "proteinPer100": 2.2,
        "carbsPer100": 7,
        "fatPer100": 4
    },
    {
        "name": "人乳（成熟乳）",
        "kcalPer100": 70,
        "proteinPer100": 1.2,
        "carbsPer100": 6.5,
        "fatPer100": 4.4
    },
    {
        "name": "人乳（初乳，1～7天)",
        "kcalPer100": 68,
        "proteinPer100": 2.2,
        "carbsPer100": 6.2,
        "fatPer100": 3.8
    },
    {
        "name": "肉鸡 (肥)",
        "kcalPer100": 389,
        "proteinPer100": 16.7,
        "carbsPer100": 0.9,
        "fatPer100": 35.4
    },
    {
        "name": "肉酥",
        "kcalPer100": 509,
        "proteinPer100": 30.7,
        "carbsPer100": 35.5,
        "fatPer100": 27.1
    },
    {
        "name": "乳鸽",
        "kcalPer100": 352,
        "proteinPer100": 11.3,
        "carbsPer100": 0,
        "fatPer100": 34.1
    },
    {
        "name": "乳鸽 (红烧)",
        "kcalPer100": 255,
        "proteinPer100": 16.9,
        "carbsPer100": 0,
        "fatPer100": 20.8
    },
    {
        "name": "乳咀嚼奶片) 奶渣",
        "kcalPer100": 381,
        "proteinPer100": 44.4,
        "carbsPer100": 41.3,
        "fatPer100": 4.2
    },
    {
        "name": "乳酪 (契达干酪，普通)",
        "kcalPer100": 412,
        "proteinPer100": 25.5,
        "carbsPer100": 0.1,
        "fatPer100": 34.4
    },
    {
        "name": "乳酪 (羊乳酪)",
        "kcalPer100": 250,
        "proteinPer100": 15.6,
        "carbsPer100": 1.5,
        "fatPer100": 20.2
    },
    {
        "name": "乳酪（中脂软酪）",
        "kcalPer100": 180,
        "proteinPer100": 9.2,
        "carbsPer100": 3.1,
        "fatPer100": 14.5
    },
    {
        "name": "乳牛肝菌（干）",
        "kcalPer100": 264,
        "proteinPer100": 15.3,
        "carbsPer100": 66,
        "fatPer100": 2.8,
        "aliases": [
            "粘盖牛肝",
            "松树菌"
        ]
    },
    {
        "name": "软化白菊苣",
        "kcalPer100": 17,
        "proteinPer100": 1.5,
        "carbsPer100": 3.1,
        "fatPer100": 0.2
    },
    {
        "name": "软梨",
        "kcalPer100": 32,
        "proteinPer100": 0.4,
        "carbsPer100": 9.1,
        "fatPer100": 0.2
    },
    {
        "name": "三湖红橘",
        "kcalPer100": 43,
        "proteinPer100": 0.8,
        "carbsPer100": 10,
        "fatPer100": 0.3
    },
    {
        "name": "三明治火腿",
        "kcalPer100": 115,
        "proteinPer100": 12.5,
        "carbsPer100": 6.1,
        "fatPer100": 4.5
    },
    {
        "name": "三元牌）",
        "kcalPer100": 74,
        "proteinPer100": 2.3,
        "carbsPer100": 9.9,
        "fatPer100": 2.8
    },
    {
        "name": "桑葚（白）",
        "kcalPer100": 60,
        "proteinPer100": 1.8,
        "carbsPer100": 14.9,
        "fatPer100": 0.3
    },
    {
        "name": "桑葚（代表值）",
        "kcalPer100": 57,
        "proteinPer100": 1.7,
        "carbsPer100": 13.8,
        "fatPer100": 0.4,
        "aliases": [
            "桑葚"
        ]
    },
    {
        "name": "桑葚（干）",
        "kcalPer100": 298,
        "proteinPer100": 21.1,
        "carbsPer100": 54.2,
        "fatPer100": 6.1
    },
    {
        "name": "沙参叶 (鲜）",
        "kcalPer100": 390,
        "proteinPer100": 0.8,
        "carbsPer100": 21.6,
        "fatPer100": 1.6,
        "aliases": [
            "白参"
        ]
    },
    {
        "name": "沙丁鱼 (茄汁，熟)",
        "kcalPer100": 155,
        "proteinPer100": 13.8,
        "carbsPer100": 3,
        "fatPer100": 9.8
    },
    {
        "name": "沙丁鱼 (盐水浸)",
        "kcalPer100": 172,
        "proteinPer100": 21.5,
        "carbsPer100": 0,
        "fatPer100": 9.6
    },
    {
        "name": "沙丁鱼[沙]",
        "kcalPer100": 89,
        "proteinPer100": 19.8,
        "carbsPer100": 0,
        "fatPer100": 1.1
    },
    {
        "name": "沙果",
        "kcalPer100": 70,
        "proteinPer100": 0.4,
        "carbsPer100": 17.8,
        "fatPer100": 0.1
    },
    {
        "name": "沙鸡",
        "kcalPer100": 147,
        "proteinPer100": 20,
        "carbsPer100": 1.6,
        "fatPer100": 6.7
    },
    {
        "name": "沙棘",
        "kcalPer100": 120,
        "proteinPer100": 0.9,
        "carbsPer100": 25.5,
        "fatPer100": 1.8
    },
    {
        "name": "沙钻鱼",
        "kcalPer100": 84,
        "proteinPer100": 18.4,
        "carbsPer100": 1.2,
        "fatPer100": 0.6,
        "aliases": [
            "多鳞鳍",
            "沙梭鱼",
            "麦穗鱼"
        ]
    },
    {
        "name": "鲨鱼 (真鲨、白斑角鲨)",
        "kcalPer100": 118,
        "proteinPer100": 22.2,
        "carbsPer100": 0,
        "fatPer100": 3.2
    },
    {
        "name": "山核桃 (干)",
        "kcalPer100": 616,
        "proteinPer100": 18,
        "carbsPer100": 26.2,
        "fatPer100": 50.4
    },
    {
        "name": "山苦荚叶（鲜）",
        "kcalPer100": 139,
        "proteinPer100": 2.2,
        "carbsPer100": 5.6,
        "fatPer100": 0.4,
        "aliases": [
            "启明菜叶"
        ]
    },
    {
        "name": "山羊肉 (酱)",
        "kcalPer100": 272,
        "proteinPer100": 25.4,
        "carbsPer100": 11.8,
        "fatPer100": 13.7
    },
    {
        "name": "山羊肉 (生)",
        "kcalPer100": 293,
        "proteinPer100": 8.7,
        "carbsPer100": 9.4,
        "fatPer100": 24.5
    },
    {
        "name": "山药（干）",
        "kcalPer100": 327,
        "proteinPer100": 9.4,
        "carbsPer100": 70.8,
        "fatPer100": 1
    },
    {
        "name": "山药(鲜）",
        "kcalPer100": 57,
        "proteinPer100": 1.9,
        "carbsPer100": 12.4,
        "fatPer100": 0.2,
        "aliases": [
            "大薯"
        ]
    },
    {
        "name": "山竹",
        "kcalPer100": 72,
        "proteinPer100": 0.4,
        "carbsPer100": 18,
        "fatPer100": 0.2
    },
    {
        "name": "扇贝 (鲜)",
        "kcalPer100": 60,
        "proteinPer100": 11.1,
        "carbsPer100": 2.6,
        "fatPer100": 0.6
    },
    {
        "name": "扇贝（干）",
        "kcalPer100": 264,
        "proteinPer100": 55.6,
        "carbsPer100": 5.1,
        "fatPer100": 2.4,
        "aliases": [
            "干贝"
        ]
    },
    {
        "name": "烧饼（加糖）",
        "kcalPer100": 298,
        "proteinPer100": 8,
        "carbsPer100": 62.7,
        "fatPer100": 2.1
    },
    {
        "name": "烧鹅",
        "kcalPer100": 289,
        "proteinPer100": 19.7,
        "carbsPer100": 4.2,
        "fatPer100": 21.5
    },
    {
        "name": "烧羊肉 (五香)",
        "kcalPer100": 183,
        "proteinPer100": 33.6,
        "carbsPer100": 0,
        "fatPer100": 5.4
    },
    {
        "name": "舌鳎",
        "kcalPer100": 83,
        "proteinPer100": 17.7,
        "carbsPer100": 0,
        "fatPer100": 1.4,
        "aliases": [
            "花纹舌头",
            "舌头鱼"
        ]
    },
    {
        "name": "蛇",
        "kcalPer100": 122,
        "proteinPer100": 20.8,
        "carbsPer100": 0.3,
        "fatPer100": 4.2,
        "aliases": [
            "沙梭鱼"
        ]
    },
    {
        "name": "蛇瓜",
        "kcalPer100": 18,
        "proteinPer100": 1.5,
        "carbsPer100": 2,
        "fatPer100": 0.1,
        "aliases": [
            "蛇豆",
            "大豆角"
        ]
    },
    {
        "name": "蛇果",
        "kcalPer100": 59,
        "proteinPer100": 0.1,
        "carbsPer100": 14.9,
        "fatPer100": 0.2
    },
    {
        "name": "生菜",
        "kcalPer100": 12,
        "proteinPer100": 1.6,
        "carbsPer100": 1.1,
        "fatPer100": 0.4,
        "aliases": [
            "叶用莴苣"
        ]
    },
    {
        "name": "生蚝",
        "kcalPer100": 57,
        "proteinPer100": 10.9,
        "carbsPer100": 0,
        "fatPer100": 1.5
    },
    {
        "name": "石斑鱼 (黑石斑鱼)",
        "kcalPer100": 95,
        "proteinPer100": 20.2,
        "carbsPer100": 0.9,
        "fatPer100": 1.2
    },
    {
        "name": "石斑鱼 (红石斑鱼)",
        "kcalPer100": 90,
        "proteinPer100": 19.9,
        "carbsPer100": 1.6,
        "fatPer100": 0.4
    },
    {
        "name": "石斑鱼 (老虎斑)",
        "kcalPer100": 130,
        "proteinPer100": 20.2,
        "carbsPer100": 2.7,
        "fatPer100": 4.3
    },
    {
        "name": "石斑鱼（花石斑鱼）",
        "kcalPer100": 95,
        "proteinPer100": 20.2,
        "carbsPer100": 1.7,
        "fatPer100": 0.8
    },
    {
        "name": "石榴 (红粉皮)",
        "kcalPer100": 74,
        "proteinPer100": 1.3,
        "carbsPer100": 19.4,
        "fatPer100": 0.1
    },
    {
        "name": "石榴 (青皮)",
        "kcalPer100": 71,
        "proteinPer100": 1.2,
        "carbsPer100": 18.5,
        "fatPer100": 0.2
    },
    {
        "name": "石榴（代表值）",
        "kcalPer100": 72,
        "proteinPer100": 1.3,
        "carbsPer100": 18.5,
        "fatPer100": 0.2,
        "aliases": [
            "石榴"
        ]
    },
    {
        "name": "石榴（玛瑙）",
        "kcalPer100": 72,
        "proteinPer100": 1.6,
        "carbsPer100": 18.4,
        "fatPer100": 0.2
    },
    {
        "name": "石螺",
        "kcalPer100": 90,
        "proteinPer100": 12.8,
        "carbsPer100": 8.2,
        "fatPer100": 0.7
    },
    {
        "name": "始鱼",
        "kcalPer100": 155,
        "proteinPer100": 19.9,
        "carbsPer100": 2.2,
        "fatPer100": 7.4,
        "aliases": [
            "青鱼",
            "始巴鱼",
            "青砖鱼"
        ]
    },
    {
        "name": "柿",
        "kcalPer100": 74,
        "proteinPer100": 0.4,
        "carbsPer100": 18.5,
        "fatPer100": 0.1
    },
    {
        "name": "柿饼",
        "kcalPer100": 255,
        "proteinPer100": 1.8,
        "carbsPer100": 62.8,
        "fatPer100": 0.2
    },
    {
        "name": "首",
        "kcalPer100": 148,
        "proteinPer100": 5,
        "carbsPer100": 1.4,
        "fatPer100": 2.9,
        "aliases": [
            "草头",
            "金花菜"
        ]
    },
    {
        "name": "双孢蘑菇",
        "kcalPer100": 26,
        "proteinPer100": 4.2,
        "carbsPer100": 1.5,
        "fatPer100": 0.1,
        "aliases": [
            "洋蘑菇"
        ]
    },
    {
        "name": "双髻鲨",
        "kcalPer100": 111,
        "proteinPer100": 27.4,
        "carbsPer100": 0,
        "fatPer100": 0.1
    },
    {
        "name": "水面筋",
        "kcalPer100": 142,
        "proteinPer100": 23.5,
        "carbsPer100": 12.3,
        "fatPer100": 0.1
    },
    {
        "name": "水芹菜",
        "kcalPer100": 13,
        "proteinPer100": 1.4,
        "carbsPer100": 1.8,
        "fatPer100": 0.2
    },
    {
        "name": "丝瓜",
        "kcalPer100": 20,
        "proteinPer100": 1.3,
        "carbsPer100": 4,
        "fatPer100": 0.2
    },
    {
        "name": "四季豆",
        "kcalPer100": 24,
        "proteinPer100": 2,
        "carbsPer100": 6,
        "fatPer100": 0.2,
        "aliases": [
            "菜豆",
            "芸豆"
        ]
    },
    {
        "name": "四季豆 （菜豆）",
        "kcalPer100": 31,
        "proteinPer100": 2,
        "carbsPer100": 5.7,
        "fatPer100": 0.4
    },
    {
        "name": "四棱豆",
        "kcalPer100": 19,
        "proteinPer100": 2,
        "carbsPer100": 4.2,
        "fatPer100": 0.2,
        "aliases": [
            "杨桃豆",
            "翅豆"
        ]
    },
    {
        "name": "松花蛋 (鸡蛋)",
        "kcalPer100": 178,
        "proteinPer100": 14.8,
        "carbsPer100": 5.8,
        "fatPer100": 10.6
    },
    {
        "name": "松江肠",
        "kcalPer100": 402,
        "proteinPer100": 12.3,
        "carbsPer100": 28.5,
        "fatPer100": 26.5
    },
    {
        "name": "松蘑（干）",
        "kcalPer100": 207,
        "proteinPer100": 20.3,
        "carbsPer100": 47.8,
        "fatPer100": 3.2,
        "aliases": [
            "松口蘑",
            "松茸"
        ]
    },
    {
        "name": "松蘑（干）",
        "kcalPer100": 273,
        "proteinPer100": 12.5,
        "carbsPer100": 66.5,
        "fatPer100": 3,
        "aliases": [
            "松茸",
            "松口蘑"
        ]
    },
    {
        "name": "松子 (生)",
        "kcalPer100": 665,
        "proteinPer100": 12.6,
        "carbsPer100": 19,
        "fatPer100": 62.6
    },
    {
        "name": "松子（炒）",
        "kcalPer100": 644,
        "proteinPer100": 14.1,
        "carbsPer100": 21.4,
        "fatPer100": 58.5
    },
    {
        "name": "松子仁",
        "kcalPer100": 718,
        "proteinPer100": 13.4,
        "carbsPer100": 12.2,
        "fatPer100": 70.6
    },
    {
        "name": "苏醇纤牛奶)",
        "kcalPer100": 72,
        "proteinPer100": 3.4,
        "carbsPer100": 5.5,
        "fatPer100": 4
    },
    {
        "name": "苏梅梨",
        "kcalPer100": 77,
        "proteinPer100": 1.2,
        "carbsPer100": 5.7,
        "fatPer100": 0.2
    },
    {
        "name": "苏木梨",
        "kcalPer100": 52,
        "proteinPer100": 0.6,
        "carbsPer100": 2.5,
        "fatPer100": 0.3
    },
    {
        "name": "酥梨",
        "kcalPer100": 45,
        "proteinPer100": 0.3,
        "carbsPer100": 1.2,
        "fatPer100": 0.1
    },
    {
        "name": "酥油",
        "kcalPer100": 860,
        "proteinPer100": 1.5,
        "carbsPer100": 1.1,
        "fatPer100": 94.4
    },
    {
        "name": "酥油茶 (原味)",
        "kcalPer100": 465,
        "proteinPer100": 3,
        "carbsPer100": 73.3,
        "fatPer100": 17.7
    },
    {
        "name": "素大肠",
        "kcalPer100": 155,
        "proteinPer100": 18.1,
        "carbsPer100": 13,
        "fatPer100": 3.6
    },
    {
        "name": "素火腿",
        "kcalPer100": 213,
        "proteinPer100": 19.1,
        "carbsPer100": 4.8,
        "fatPer100": 13.2
    },
    {
        "name": "素鸡",
        "kcalPer100": 194,
        "proteinPer100": 16.5,
        "carbsPer100": 4.2,
        "fatPer100": 12.5
    },
    {
        "name": "素鸡丝卷",
        "kcalPer100": 197,
        "proteinPer100": 11.2,
        "carbsPer100": 10.1,
        "fatPer100": 13.7
    },
    {
        "name": "素什锦",
        "kcalPer100": 177,
        "proteinPer100": 14,
        "carbsPer100": 8.3,
        "fatPer100": 10.2
    },
    {
        "name": "酸白菜",
        "kcalPer100": 10,
        "proteinPer100": 0.7,
        "carbsPer100": 2.6,
        "fatPer100": 0.2,
        "aliases": [
            "酸菜"
        ]
    },
    {
        "name": "酸刺",
        "kcalPer100": 112,
        "proteinPer100": 2.8,
        "carbsPer100": 25.5,
        "fatPer100": 0.3
    },
    {
        "name": "酸豆奶",
        "kcalPer100": 67,
        "proteinPer100": 2.2,
        "carbsPer100": 11.8,
        "fatPer100": 1.2
    },
    {
        "name": "酸酪蛋",
        "kcalPer100": 443,
        "proteinPer100": 40.4,
        "carbsPer100": 24.4,
        "fatPer100": 20.4
    },
    {
        "name": "酸梨",
        "kcalPer100": 33,
        "proteinPer100": 0.1,
        "carbsPer100": 3.7,
        "fatPer100": 0.1
    },
    {
        "name": "酸木瓜",
        "kcalPer100": 41,
        "proteinPer100": 0.3,
        "carbsPer100": 11.1,
        "fatPer100": 0.2
    },
    {
        "name": "酸奶",
        "kcalPer100": 85.5,
        "proteinPer100": 295,
        "carbsPer100": 1.9,
        "fatPer100": 3.2,
        "aliases": [
            "酸牛奶",
            "优酪乳"
        ],
        "unitWeight": 100,
        "unitName": "杯"
    },
    {
        "name": "酸奶 (高蛋白)",
        "kcalPer100": 62,
        "proteinPer100": 3.2,
        "carbsPer100": 7.3,
        "fatPer100": 2.2
    },
    {
        "name": "酸奶 (果粒) 酸奶（全脂，多美鲜全脂果",
        "kcalPer100": 98,
        "proteinPer100": 3.3,
        "carbsPer100": 14.6,
        "fatPer100": 2.9
    },
    {
        "name": "酸奶 (果料)",
        "kcalPer100": 67,
        "proteinPer100": 3.1,
        "carbsPer100": 10.4,
        "fatPer100": 1.4
    },
    {
        "name": "酸奶(代表值，全脂)",
        "kcalPer100": 81,
        "proteinPer100": 363,
        "carbsPer100": 2.6,
        "fatPer100": 2.8,
        "aliases": [
            "酸奶"
        ],
        "unitWeight": 100,
        "unitName": "杯"
    },
    {
        "name": "酸奶（低脂，艾美牌,草莓、 芒果、蓝莓、覆盆子、菠萝 味低脂风味发酵乳）",
        "kcalPer100": 96,
        "proteinPer100": 1.6,
        "carbsPer100": 16.9,
        "fatPer100": 2.4
    },
    {
        "name": "酸奶(低脂)",
        "kcalPer100": 64,
        "proteinPer100": 2.7,
        "carbsPer100": 9,
        "fatPer100": 1.9
    },
    {
        "name": "酸奶（调味）",
        "kcalPer100": 88,
        "proteinPer100": 3,
        "carbsPer100": 11.9,
        "fatPer100": 3.2
    },
    {
        "name": "酸奶(橘味，脱脂)",
        "kcalPer100": 48,
        "proteinPer100": 3.2,
        "carbsPer100": 8.2,
        "fatPer100": 0.3
    },
    {
        "name": "酸奶（全脂，盖瑞牌，全 脂风味发酵乳)",
        "kcalPer100": 93,
        "proteinPer100": 3.1,
        "carbsPer100": 14.6,
        "fatPer100": 2.5
    },
    {
        "name": "酸奶(全脂，花园牌)",
        "kcalPer100": 77,
        "proteinPer100": 1.6,
        "carbsPer100": 11.3,
        "fatPer100": 2.8
    },
    {
        "name": "酸奶（全脂，佳丽牌，益 家全脂风味发酵乳)",
        "kcalPer100": 95,
        "proteinPer100": 2.9,
        "carbsPer100": 13.8,
        "fatPer100": 3.1
    },
    {
        "name": "酸奶（全脂，天润牌浓缩 酸奶，全脂风味发酵乳）",
        "kcalPer100": 95,
        "proteinPer100": 3,
        "carbsPer100": 14.1,
        "fatPer100": 2.9
    },
    {
        "name": "酸奶（全脂，西域春牌新 疆老酸奶，凝固型)",
        "kcalPer100": 96,
        "proteinPer100": 3.1,
        "carbsPer100": 15.1,
        "fatPer100": 2.6
    },
    {
        "name": "酸奶（脱脂）",
        "kcalPer100": 57,
        "proteinPer100": 3.3,
        "carbsPer100": 10,
        "fatPer100": 0.4
    },
    {
        "name": "酸奶疙瘩 (干，农户家)",
        "kcalPer100": 446,
        "proteinPer100": 48.8,
        "carbsPer100": 20.9,
        "fatPer100": 18.6
    },
    {
        "name": "酸奶疙瘩 (新鲜)",
        "kcalPer100": 275,
        "proteinPer100": 18.6,
        "carbsPer100": 12.4,
        "fatPer100": 16.8
    },
    {
        "name": "酸奶疙瘩(干,市售、加盐)",
        "kcalPer100": 383,
        "proteinPer100": 51.6,
        "carbsPer100": 17.8,
        "fatPer100": 11.7
    },
    {
        "name": "酸奶疙瘩（干，市售）",
        "kcalPer100": 451,
        "proteinPer100": 31.1,
        "carbsPer100": 19.6,
        "fatPer100": 27.6
    },
    {
        "name": "酸奶疙瘩（瑞缘牌，中脂 特硬质干酪）",
        "kcalPer100": 456,
        "proteinPer100": 14.4,
        "carbsPer100": 49.5,
        "fatPer100": 22.3
    },
    {
        "name": "酸枣",
        "kcalPer100": 300,
        "proteinPer100": 3.5,
        "carbsPer100": 73.3,
        "fatPer100": 1.5
    },
    {
        "name": "蒜肠",
        "kcalPer100": 309,
        "proteinPer100": 7.5,
        "carbsPer100": 12.7,
        "fatPer100": 25.4
    },
    {
        "name": "蒜黄（黄色）",
        "kcalPer100": 24,
        "proteinPer100": 2.5,
        "carbsPer100": 3.8,
        "fatPer100": 0.2
    },
    {
        "name": "蒜苗(绿色，青蒜)",
        "kcalPer100": 40,
        "proteinPer100": 2.1,
        "carbsPer100": 8,
        "fatPer100": 0.4
    },
    {
        "name": "蒜墓（圆）",
        "kcalPer100": 66,
        "proteinPer100": 2,
        "carbsPer100": 15.4,
        "fatPer100": 0.1
    },
    {
        "name": "梭子蟹",
        "kcalPer100": 95,
        "proteinPer100": 15.9,
        "carbsPer100": 0.9,
        "fatPer100": 3.1
    },
    {
        "name": "苔菜（干）",
        "kcalPer100": 167,
        "proteinPer100": 19,
        "carbsPer100": 26.3,
        "fatPer100": 0.4,
        "aliases": [
            "苔条",
            "条浒苔"
        ]
    },
    {
        "name": "太仓肉松",
        "kcalPer100": 316,
        "proteinPer100": 38.6,
        "carbsPer100": 21.6,
        "fatPer100": 8.3
    },
    {
        "name": "汤菜（鲜）",
        "kcalPer100": 99,
        "proteinPer100": 1.8,
        "carbsPer100": 3.4,
        "fatPer100": 0.5
    },
    {
        "name": "棠梨花",
        "kcalPer100": 58,
        "proteinPer100": 3.5,
        "carbsPer100": 9.1,
        "fatPer100": 0.8
    },
    {
        "name": "塘水虾",
        "kcalPer100": 96,
        "proteinPer100": 21.2,
        "carbsPer100": 0,
        "fatPer100": 1.2,
        "aliases": [
            "草虾"
        ]
    },
    {
        "name": "桃（代表值）",
        "kcalPer100": 42,
        "proteinPer100": 0.6,
        "carbsPer100": 10.1,
        "fatPer100": 0.1,
        "aliases": [
            "桃"
        ]
    },
    {
        "name": "桃（黄桃）",
        "kcalPer100": 56,
        "proteinPer100": 0.5,
        "carbsPer100": 14,
        "fatPer100": 0.1
    },
    {
        "name": "桃（久保桃）",
        "kcalPer100": 42,
        "proteinPer100": 0.6,
        "carbsPer100": 10,
        "fatPer100": 0.1
    },
    {
        "name": "特牛肉",
        "kcalPer100": 119,
        "proteinPer100": 23.1,
        "carbsPer100": 3.4,
        "fatPer100": 1.4
    },
    {
        "name": "田螺",
        "kcalPer100": 60,
        "proteinPer100": 11,
        "carbsPer100": 3.6,
        "fatPer100": 0.2
    },
    {
        "name": "甜菜根(鲜）甜菜头，糖萝卜]",
        "kcalPer100": 87,
        "proteinPer100": 1,
        "carbsPer100": 23.5,
        "fatPer100": 0.1
    },
    {
        "name": "甜菜叶 (鲜）",
        "kcalPer100": 22,
        "proteinPer100": 1.8,
        "carbsPer100": 4,
        "fatPer100": 0.1
    },
    {
        "name": "甜脆荷兰豆",
        "kcalPer100": 32,
        "proteinPer100": 3,
        "carbsPer100": 8.1,
        "fatPer100": 0.3,
        "aliases": [
            "甜豆"
        ]
    },
    {
        "name": "甜瓜",
        "kcalPer100": 26,
        "proteinPer100": 0.4,
        "carbsPer100": 6.2,
        "fatPer100": 0.1,
        "aliases": [
            "香瓜"
        ]
    },
    {
        "name": "甜椒（脱水）",
        "kcalPer100": 324,
        "proteinPer100": 7.6,
        "carbsPer100": 76.6,
        "fatPer100": 0.4
    },
    {
        "name": "甜嫩豌豆泥（亨氏甜嫩豌 豆泥1阶段)",
        "kcalPer100": 200,
        "proteinPer100": 1,
        "carbsPer100": 1.5,
        "fatPer100": 9.3
    },
    {
        "name": "童子鸡 (熟)",
        "kcalPer100": 226,
        "proteinPer100": 15.8,
        "carbsPer100": 0,
        "fatPer100": 18.1
    },
    {
        "name": "土三七（鲜）",
        "kcalPer100": 200,
        "proteinPer100": 2.1,
        "carbsPer100": 9,
        "fatPer100": 0.7,
        "aliases": [
            "景天三七"
        ]
    },
    {
        "name": "兔肉",
        "kcalPer100": 102,
        "proteinPer100": 19.7,
        "carbsPer100": 0.9,
        "fatPer100": 2.2
    },
    {
        "name": "兔肉 (野)",
        "kcalPer100": 84,
        "proteinPer100": 16.6,
        "carbsPer100": 0,
        "fatPer100": 2
    },
    {
        "name": "团螺",
        "kcalPer100": 365,
        "proteinPer100": 70.2,
        "carbsPer100": 6.2,
        "fatPer100": 6.6
    },
    {
        "name": "脱脂甜炼乳",
        "kcalPer100": 275,
        "proteinPer100": 10.3,
        "carbsPer100": 58,
        "fatPer100": 0.2
    },
    {
        "name": "驼奶（旺源牌，易拉罐）",
        "kcalPer100": 81,
        "proteinPer100": 3.9,
        "carbsPer100": 6,
        "fatPer100": 4.6
    },
    {
        "name": "娃娃菜",
        "kcalPer100": 13,
        "proteinPer100": 1.9,
        "carbsPer100": 2.4,
        "fatPer100": 0.2
    },
    {
        "name": "瓦罐鸡汤 (肉)",
        "kcalPer100": 190,
        "proteinPer100": 20.9,
        "carbsPer100": 5.2,
        "fatPer100": 9.5
    },
    {
        "name": "歪头菜（鲜）",
        "kcalPer100": 308,
        "proteinPer100": 2.5,
        "carbsPer100": 17.9,
        "fatPer100": 0.3,
        "aliases": [
            "草豆",
            "二叶"
        ]
    },
    {
        "name": "豌豆 (花)",
        "kcalPer100": 336,
        "proteinPer100": 21.6,
        "carbsPer100": 63.6,
        "fatPer100": 1
    },
    {
        "name": "豌豆 (煮)",
        "kcalPer100": 107,
        "proteinPer100": 8.9,
        "carbsPer100": 19.2,
        "fatPer100": 0.3
    },
    {
        "name": "豌豆（带荚，鲜）",
        "kcalPer100": 111,
        "proteinPer100": 7.4,
        "carbsPer100": 21.2,
        "fatPer100": 0.3,
        "aliases": [
            "回回豆"
        ]
    },
    {
        "name": "豌豆（干)",
        "kcalPer100": 334,
        "proteinPer100": 20.3,
        "carbsPer100": 65.8,
        "fatPer100": 1.1
    },
    {
        "name": "晚 (特等）",
        "kcalPer100": 342,
        "proteinPer100": 8.1,
        "carbsPer100": 76.9,
        "fatPer100": 0.3
    },
    {
        "name": "晚釉 (标二)",
        "kcalPer100": 344,
        "proteinPer100": 8.6,
        "carbsPer100": 75.7,
        "fatPer100": 0.8
    },
    {
        "name": "晚釉（标一）",
        "kcalPer100": 346,
        "proteinPer100": 7.9,
        "carbsPer100": 77.3,
        "fatPer100": 0.7
    },
    {
        "name": "煨牛肉 (罐头)",
        "kcalPer100": 166,
        "proteinPer100": 16.7,
        "carbsPer100": 0.1,
        "fatPer100": 11
    },
    {
        "name": "萎蒿 (鲜)",
        "kcalPer100": 239,
        "proteinPer100": 3.7,
        "carbsPer100": 0,
        "fatPer100": 9
    },
    {
        "name": "文蛤（鲜）",
        "kcalPer100": 56,
        "proteinPer100": 9.2,
        "carbsPer100": 3.2,
        "fatPer100": 0.7
    },
    {
        "name": "倭锦苹果",
        "kcalPer100": 54,
        "proteinPer100": 0.2,
        "carbsPer100": 13.6,
        "fatPer100": 0.2
    },
    {
        "name": "莴笋(鲜）",
        "kcalPer100": 15,
        "proteinPer100": 1,
        "carbsPer100": 2.8,
        "fatPer100": 0.1,
        "aliases": [
            "莴苣"
        ]
    },
    {
        "name": "莴笋叶",
        "kcalPer100": 15,
        "proteinPer100": 1,
        "carbsPer100": 2.9,
        "fatPer100": 0.2,
        "aliases": [
            "莴苣菜"
        ]
    },
    {
        "name": "乌",
        "kcalPer100": 85,
        "proteinPer100": 18.5,
        "carbsPer100": 0,
        "fatPer100": 1.2,
        "aliases": [
            "黑鱼",
            "乌鱼",
            "生鱼"
        ]
    },
    {
        "name": "乌（野生）",
        "kcalPer100": 105,
        "proteinPer100": 19.9,
        "carbsPer100": 1.1,
        "fatPer100": 2.3,
        "aliases": [
            "黑鱼",
            "乌鱼",
            "生鱼"
        ]
    },
    {
        "name": "乌菜",
        "kcalPer100": 28,
        "proteinPer100": 2.6,
        "carbsPer100": 4.2,
        "fatPer100": 0.4,
        "aliases": [
            "乌塌菜",
            "塌棵菜"
        ]
    },
    {
        "name": "乌龟 （龟板）",
        "kcalPer100": 466,
        "proteinPer100": 9.9,
        "carbsPer100": 6.8,
        "fatPer100": 44.4
    },
    {
        "name": "乌龟 (肉)",
        "kcalPer100": 250,
        "proteinPer100": 14.5,
        "carbsPer100": 0.4,
        "fatPer100": 21.1
    },
    {
        "name": "乌梢蛇",
        "kcalPer100": 219,
        "proteinPer100": 49.4,
        "carbsPer100": 0.9,
        "fatPer100": 2
    },
    {
        "name": "乌塌菜",
        "kcalPer100": 13,
        "proteinPer100": 1.8,
        "carbsPer100": 2.6,
        "fatPer100": 0.1,
        "aliases": [
            "塌菜",
            "塌棵菜"
        ]
    },
    {
        "name": "乌鱼蛋",
        "kcalPer100": 66,
        "proteinPer100": 14.1,
        "carbsPer100": 0,
        "fatPer100": 1.1
    },
    {
        "name": "无花果",
        "kcalPer100": 65,
        "proteinPer100": 1.5,
        "carbsPer100": 16,
        "fatPer100": 0.1
    },
    {
        "name": "无花果 (干)",
        "kcalPer100": 361,
        "proteinPer100": 3.6,
        "carbsPer100": 77.8,
        "fatPer100": 4.3
    },
    {
        "name": "五月鲜桃",
        "kcalPer100": 41,
        "proteinPer100": 0.4,
        "carbsPer100": 0.9,
        "fatPer100": 10
    },
    {
        "name": "午餐肠",
        "kcalPer100": 261,
        "proteinPer100": 2.9,
        "carbsPer100": 24.9,
        "fatPer100": 16.6
    },
    {
        "name": "午餐肚",
        "kcalPer100": 181,
        "proteinPer100": 9.3,
        "carbsPer100": 34.7,
        "fatPer100": 0.5
    },
    {
        "name": "午餐肉 (北京)",
        "kcalPer100": 229,
        "proteinPer100": 9.4,
        "carbsPer100": 12,
        "fatPer100": 15.9
    },
    {
        "name": "午餐肉 （上海梅林牌）",
        "kcalPer100": 320,
        "proteinPer100": 9,
        "carbsPer100": 3.3,
        "fatPer100": 30.1
    },
    {
        "name": "午餐鱼 (香辣味)",
        "kcalPer100": 383,
        "proteinPer100": 24.4,
        "carbsPer100": 3.3,
        "fatPer100": 30.2
    },
    {
        "name": "西瓜 (郑州三号）",
        "kcalPer100": 26,
        "proteinPer100": 0.6,
        "carbsPer100": 5.7,
        "fatPer100": 0.1
    },
    {
        "name": "西瓜（代表值）",
        "kcalPer100": 31,
        "proteinPer100": 0.5,
        "carbsPer100": 6.8,
        "fatPer100": 0.3,
        "aliases": [
            "西瓜"
        ]
    },
    {
        "name": "西瓜（忠于6号，黑皮）",
        "kcalPer100": 32,
        "proteinPer100": 0.5,
        "carbsPer100": 6.5,
        "fatPer100": 0.5
    },
    {
        "name": "西瓜子",
        "kcalPer100": 567,
        "proteinPer100": 30.3,
        "carbsPer100": 13.4,
        "fatPer100": 46.5
    },
    {
        "name": "西瓜子(炒）",
        "kcalPer100": 582,
        "proteinPer100": 32.7,
        "carbsPer100": 14.2,
        "fatPer100": 44.8
    },
    {
        "name": "西瓜子（熟）",
        "kcalPer100": 550,
        "proteinPer100": 29,
        "carbsPer100": 9.5,
        "fatPer100": 46,
        "aliases": [
            "黑瓜子"
        ]
    },
    {
        "name": "西瓜子仁",
        "kcalPer100": 566,
        "proteinPer100": 32.4,
        "carbsPer100": 8.6,
        "fatPer100": 45.9
    },
    {
        "name": "西葫芦",
        "kcalPer100": 19,
        "proteinPer100": 0.8,
        "carbsPer100": 0.6,
        "fatPer100": 0.2
    },
    {
        "name": "西兰花",
        "kcalPer100": 27,
        "proteinPer100": 3.5,
        "carbsPer100": 3.7,
        "fatPer100": 0.6,
        "aliases": [
            "绿菜花",
            "花椰菜",
            "青花菜"
        ]
    },
    {
        "name": "西梅",
        "kcalPer100": 42,
        "proteinPer100": 0.7,
        "carbsPer100": 0.7,
        "fatPer100": 10.3
    },
    {
        "name": "西芹",
        "kcalPer100": 17,
        "proteinPer100": 0.6,
        "carbsPer100": 4.8,
        "fatPer100": 0.1,
        "aliases": [
            "西洋芹菜",
            "美芹"
        ]
    },
    {
        "name": "细香葱",
        "kcalPer100": 28,
        "proteinPer100": 1.4,
        "carbsPer100": 6.6,
        "fatPer100": 0.3,
        "aliases": [
            "香葱",
            "四季葱"
        ]
    },
    {
        "name": "虾虎",
        "kcalPer100": 81,
        "proteinPer100": 11.6,
        "carbsPer100": 4.8,
        "fatPer100": 1.7
    },
    {
        "name": "虾酱",
        "kcalPer100": 112,
        "proteinPer100": 10.8,
        "carbsPer100": 0,
        "fatPer100": 7.6
    },
    {
        "name": "虾米",
        "kcalPer100": 198,
        "proteinPer100": 43.7,
        "carbsPer100": 0,
        "fatPer100": 2.6,
        "aliases": [
            "海米",
            "虾仁"
        ]
    },
    {
        "name": "虾脑酱",
        "kcalPer100": 100,
        "proteinPer100": 15.2,
        "carbsPer100": 0,
        "fatPer100": 4.3
    },
    {
        "name": "虾皮",
        "kcalPer100": 153,
        "proteinPer100": 30.7,
        "carbsPer100": 2.5,
        "fatPer100": 2.2
    },
    {
        "name": "虾仁",
        "kcalPer100": 199,
        "proteinPer100": 20.8,
        "carbsPer100": 27.7,
        "fatPer100": 0.6
    },
    {
        "name": "虾仁 (红)",
        "kcalPer100": 48,
        "proteinPer100": 10.4,
        "carbsPer100": 0,
        "fatPer100": 0.7
    },
    {
        "name": "虾仁肉丸",
        "kcalPer100": 152,
        "proteinPer100": 4.6,
        "carbsPer100": 16.7,
        "fatPer100": 7.4
    },
    {
        "name": "夏枯草（鲜）",
        "kcalPer100": 265,
        "proteinPer100": 2.5,
        "carbsPer100": 12.7,
        "fatPer100": 0.7,
        "aliases": [
            "铁色草"
        ]
    },
    {
        "name": "鲜贝",
        "kcalPer100": 77,
        "proteinPer100": 15.7,
        "carbsPer100": 2.5,
        "fatPer100": 0.5
    },
    {
        "name": "鲜驴奶",
        "kcalPer100": 33,
        "proteinPer100": 0.4,
        "carbsPer100": 6.5,
        "fatPer100": 0.6
    },
    {
        "name": "鲜驴奶 (冻)",
        "kcalPer100": 41,
        "proteinPer100": 0.5,
        "carbsPer100": 7,
        "fatPer100": 1.2
    },
    {
        "name": "鲜驴奶 (花麒牌，冻)",
        "kcalPer100": 39,
        "proteinPer100": 0.8,
        "carbsPer100": 6.5,
        "fatPer100": 1.1
    },
    {
        "name": "鲜牛奶（代表值，全脂）",
        "kcalPer100": 67,
        "proteinPer100": 3.4,
        "carbsPer100": 5.1,
        "fatPer100": 3.7,
        "aliases": [
            "鲜牛奶"
        ]
    },
    {
        "name": "鲜牛奶(全脂,光明鲜牛奶)",
        "kcalPer100": 63,
        "proteinPer100": 3.4,
        "carbsPer100": 4.5,
        "fatPer100": 3.5
    },
    {
        "name": "鲜牛奶（全脂，辉山鲜博 士鲜牛奶）",
        "kcalPer100": 70,
        "proteinPer100": 3.6,
        "carbsPer100": 4.1,
        "fatPer100": 4.3
    },
    {
        "name": "鲜牛奶(全脂,完达山鲜牛乳)",
        "kcalPer100": 66,
        "proteinPer100": 3.6,
        "carbsPer100": 4.6,
        "fatPer100": 3.7
    },
    {
        "name": "鲜牛奶（全脂，西域春牌 全脂巴氏杀菌乳）",
        "kcalPer100": 63,
        "proteinPer100": 2.5,
        "carbsPer100": 6.3,
        "fatPer100": 3.1
    },
    {
        "name": "鲜牛奶（全脂，现代牧场 鲜牛奶)",
        "kcalPer100": 64,
        "proteinPer100": 3.4,
        "carbsPer100": 4.5,
        "fatPer100": 3.6
    },
    {
        "name": "鲜牛奶（全脂，新希望千 岛湖牧场鲜牛奶)",
        "kcalPer100": 76,
        "proteinPer100": 3.6,
        "carbsPer100": 6.7,
        "fatPer100": 3.9
    },
    {
        "name": "鲜牛奶(全脂，一鸣鲜牛奶)",
        "kcalPer100": 66,
        "proteinPer100": 3.5,
        "carbsPer100": 5,
        "fatPer100": 3.6
    },
    {
        "name": "鲜驼奶",
        "kcalPer100": 72,
        "proteinPer100": 3.7,
        "carbsPer100": 6.5,
        "fatPer100": 3.5
    },
    {
        "name": "鲜驼奶 (冻)",
        "kcalPer100": 86,
        "proteinPer100": 3.6,
        "carbsPer100": 9.9,
        "fatPer100": 3.5
    },
    {
        "name": "咸肉",
        "kcalPer100": 390,
        "proteinPer100": 16.5,
        "carbsPer100": 0,
        "fatPer100": 36
    },
    {
        "name": "苋菜(绿，鲜)",
        "kcalPer100": 30,
        "proteinPer100": 2.8,
        "carbsPer100": 5,
        "fatPer100": 0.3
    },
    {
        "name": "苋菜(紫，鲜）",
        "kcalPer100": 35,
        "proteinPer100": 2.8,
        "carbsPer100": 5.9,
        "fatPer100": 0.4,
        "aliases": [
            "红苋"
        ]
    },
    {
        "name": "香菜 (脱水)",
        "kcalPer100": 310,
        "proteinPer100": 7.4,
        "carbsPer100": 71.2,
        "fatPer100": 1.3
    },
    {
        "name": "香菜（鲜）",
        "kcalPer100": 33,
        "proteinPer100": 1.8,
        "carbsPer100": 6.2,
        "fatPer100": 0.4,
        "aliases": [
            "荒萎"
        ]
    },
    {
        "name": "香肠",
        "kcalPer100": 508,
        "proteinPer100": 24.1,
        "carbsPer100": 11.2,
        "fatPer100": 40.7
    },
    {
        "name": "香肠 (罐头)",
        "kcalPer100": 290,
        "proteinPer100": 7.9,
        "carbsPer100": 1.3,
        "fatPer100": 28.1
    },
    {
        "name": "香椿（鲜）",
        "kcalPer100": 211,
        "proteinPer100": 1.7,
        "carbsPer100": 10.9,
        "fatPer100": 0.4,
        "aliases": [
            "香椿芽"
        ]
    },
    {
        "name": "香菇（干）",
        "kcalPer100": 274,
        "proteinPer100": 20,
        "carbsPer100": 31.6,
        "fatPer100": 1.2,
        "aliases": [
            "香草",
            "冬菇"
        ]
    },
    {
        "name": "香菇（鲜）",
        "kcalPer100": 26,
        "proteinPer100": 2.2,
        "carbsPer100": 3.3,
        "fatPer100": 0.3,
        "aliases": [
            "香草",
            "冬菇"
        ]
    },
    {
        "name": "香海螺",
        "kcalPer100": 163,
        "proteinPer100": 22.7,
        "carbsPer100": 10.1,
        "fatPer100": 3.5
    },
    {
        "name": "香蕉",
        "kcalPer100": 93,
        "proteinPer100": 1.4,
        "carbsPer100": 22,
        "fatPer100": 0.2,
        "aliases": [
            "甘蕉"
        ],
        "unitWeight": 120,
        "unitName": "根"
    },
    {
        "name": "香蕉 (红皮)",
        "kcalPer100": 81,
        "proteinPer100": 1.1,
        "carbsPer100": 19.7,
        "fatPer100": 0.2
    },
    {
        "name": "香蕉(红皮）",
        "kcalPer100": 86,
        "proteinPer100": 1.1,
        "carbsPer100": 20.8,
        "fatPer100": 0.2
    },
    {
        "name": "香梨",
        "kcalPer100": 51,
        "proteinPer100": 0.3,
        "carbsPer100": 2.7,
        "fatPer100": 0.1
    },
    {
        "name": "香米",
        "kcalPer100": 347,
        "proteinPer100": 12.7,
        "carbsPer100": 72.4,
        "fatPer100": 0.9
    },
    {
        "name": "香杏丁蘑 (千，大)",
        "kcalPer100": 257,
        "proteinPer100": 22.4,
        "carbsPer100": 24.9,
        "fatPer100": 0.2
    },
    {
        "name": "香杏片口蘑（干）",
        "kcalPer100": 252,
        "proteinPer100": 33.4,
        "carbsPer100": 22.6,
        "fatPer100": 1.5
    },
    {
        "name": "香玉苹果",
        "kcalPer100": 62,
        "proteinPer100": 0.5,
        "carbsPer100": 15.7,
        "fatPer100": 0.1
    },
    {
        "name": "橡实",
        "kcalPer100": 233,
        "proteinPer100": 4,
        "carbsPer100": 50.5,
        "fatPer100": 2,
        "aliases": [
            "橡子",
            "青冈子"
        ]
    },
    {
        "name": "小豆粥",
        "kcalPer100": 62,
        "proteinPer100": 1.2,
        "carbsPer100": 13.7,
        "fatPer100": 0.4
    },
    {
        "name": "小米",
        "kcalPer100": 361,
        "proteinPer100": 9,
        "carbsPer100": 75.1,
        "fatPer100": 3.1
    },
    {
        "name": "小米 (黄)",
        "kcalPer100": 364,
        "proteinPer100": 8.9,
        "carbsPer100": 77.7,
        "fatPer100": 3
    },
    {
        "name": "小米面",
        "kcalPer100": 357,
        "proteinPer100": 7.2,
        "carbsPer100": 77.7,
        "fatPer100": 2.1
    },
    {
        "name": "小米粥",
        "kcalPer100": 46,
        "proteinPer100": 1.4,
        "carbsPer100": 8.4,
        "fatPer100": 0.7
    },
    {
        "name": "小水萝卜",
        "kcalPer100": 21,
        "proteinPer100": 1.1,
        "carbsPer100": 4.2,
        "fatPer100": 0.2,
        "aliases": [
            "算盘子",
            "红皮萝卜"
        ]
    },
    {
        "name": "小西瓜",
        "kcalPer100": 30,
        "proteinPer100": 0.8,
        "carbsPer100": 6.7,
        "fatPer100": 0.1,
        "aliases": [
            "地雷瓜"
        ]
    },
    {
        "name": "小叶橘",
        "kcalPer100": 40,
        "proteinPer100": 1.1,
        "carbsPer100": 8.8,
        "fatPer100": 0.2
    },
    {
        "name": "小枣 (干)",
        "kcalPer100": 275,
        "proteinPer100": 2.7,
        "carbsPer100": 66.8,
        "fatPer100": 0.7
    },
    {
        "name": "蟹膏 (大闸蟹，蒸)",
        "kcalPer100": 167,
        "proteinPer100": 15.4,
        "carbsPer100": 4.4,
        "fatPer100": 9.8
    },
    {
        "name": "蟹黄 (大闸蟹，蒸)",
        "kcalPer100": 255,
        "proteinPer100": 24,
        "carbsPer100": 1.2,
        "fatPer100": 17.2
    },
    {
        "name": "蟹肉",
        "kcalPer100": 62,
        "proteinPer100": 11.6,
        "carbsPer100": 1.1,
        "fatPer100": 1.2
    },
    {
        "name": "蟹肉 (大闸蟹，母，蒸)",
        "kcalPer100": 131,
        "proteinPer100": 22.4,
        "carbsPer100": 0.9,
        "fatPer100": 4.2
    },
    {
        "name": "型零乳糖牛奶）",
        "kcalPer100": 60,
        "proteinPer100": 3,
        "carbsPer100": 4,
        "fatPer100": 3.5
    },
    {
        "name": "杏",
        "kcalPer100": 38,
        "proteinPer100": 0.9,
        "carbsPer100": 1.3,
        "fatPer100": 9.1
    },
    {
        "name": "杏 (罐头)",
        "kcalPer100": 40,
        "proteinPer100": 0.6,
        "carbsPer100": 1.4,
        "fatPer100": 9.7
    },
    {
        "name": "杏鲍菇",
        "kcalPer100": 35,
        "proteinPer100": 1.3,
        "carbsPer100": 8.3,
        "fatPer100": 0.1
    },
    {
        "name": "杏干",
        "kcalPer100": 338,
        "proteinPer100": 2.7,
        "carbsPer100": 4.4,
        "fatPer100": 83.2
    },
    {
        "name": "杏仁",
        "kcalPer100": 578,
        "proteinPer100": 22.5,
        "carbsPer100": 23.9,
        "fatPer100": 45.4
    },
    {
        "name": "杏仁 (炒)",
        "kcalPer100": 618,
        "proteinPer100": 25.7,
        "carbsPer100": 18.7,
        "fatPer100": 51
    },
    {
        "name": "杏仁 (大杏仁)",
        "kcalPer100": 540,
        "proteinPer100": 19.9,
        "carbsPer100": 27.8,
        "fatPer100": 42.9
    },
    {
        "name": "杏仁 (过油炸干)",
        "kcalPer100": 631,
        "proteinPer100": 21.2,
        "carbsPer100": 17.7,
        "fatPer100": 55.2
    },
    {
        "name": "杏仁 (烤干，不加盐）",
        "kcalPer100": 617,
        "proteinPer100": 22.1,
        "carbsPer100": 19.3,
        "fatPer100": 52.8
    },
    {
        "name": "杏仁 (漂白后)",
        "kcalPer100": 602,
        "proteinPer100": 21.9,
        "carbsPer100": 19.9,
        "fatPer100": 50.6
    },
    {
        "name": "杏仁 (原味)",
        "kcalPer100": 596,
        "proteinPer100": 21.3,
        "carbsPer100": 19.7,
        "fatPer100": 50.6
    },
    {
        "name": "杏仁（烤干，加盐）",
        "kcalPer100": 617,
        "proteinPer100": 22.1,
        "carbsPer100": 19.3,
        "fatPer100": 52.8
    },
    {
        "name": "雪花梨",
        "kcalPer100": 42,
        "proteinPer100": 0.2,
        "carbsPer100": 0.8,
        "fatPer100": 0.1
    },
    {
        "name": "雪梨",
        "kcalPer100": 79,
        "proteinPer100": 0.9,
        "carbsPer100": 3,
        "fatPer100": 0.1
    },
    {
        "name": "鳕鱼",
        "kcalPer100": 88,
        "proteinPer100": 20.4,
        "carbsPer100": 0.5,
        "fatPer100": 0.5,
        "aliases": [
            "鳕狭",
            "明太鱼"
        ]
    },
    {
        "name": "鳕鱼 (炸)",
        "kcalPer100": 241,
        "proteinPer100": 12.4,
        "carbsPer100": 15.6,
        "fatPer100": 14.3
    },
    {
        "name": "血蚶 (鲜)",
        "kcalPer100": 51,
        "proteinPer100": 8.2,
        "carbsPer100": 3.3,
        "fatPer100": 0.5
    },
    {
        "name": "血红菇 (干)",
        "kcalPer100": 313,
        "proteinPer100": 22.4,
        "carbsPer100": 56,
        "fatPer100": 6.7
    },
    {
        "name": "鲟鱼",
        "kcalPer100": 100,
        "proteinPer100": 23.4,
        "carbsPer100": 0.6,
        "fatPer100": 0.4
    },
    {
        "name": "鸭（代表值）",
        "kcalPer100": 240,
        "proteinPer100": 15.5,
        "carbsPer100": 0.2,
        "fatPer100": 19.7,
        "aliases": [
            "鸭"
        ]
    },
    {
        "name": "鸭胞(公麻鸭）",
        "kcalPer100": 112,
        "proteinPer100": 19.8,
        "carbsPer100": 5.4,
        "fatPer100": 1.2
    },
    {
        "name": "鸭肠",
        "kcalPer100": 129,
        "proteinPer100": 14.2,
        "carbsPer100": 0.4,
        "fatPer100": 7.8
    },
    {
        "name": "鸭豉片",
        "kcalPer100": 603,
        "proteinPer100": 18.3,
        "carbsPer100": 6.1,
        "fatPer100": 56.1
    },
    {
        "name": "鸭翅",
        "kcalPer100": 146,
        "proteinPer100": 16.5,
        "carbsPer100": 6.3,
        "fatPer100": 6.1
    },
    {
        "name": "鸭蛋",
        "kcalPer100": 180,
        "proteinPer100": 12.6,
        "carbsPer100": 3.1,
        "fatPer100": 13,
        "unitWeight": 60,
        "unitName": "个"
    },
    {
        "name": "鸭蛋(咸鸭蛋，煮)",
        "kcalPer100": 177,
        "proteinPer100": 13.8,
        "carbsPer100": 0,
        "fatPer100": 13.5
    },
    {
        "name": "鸭蛋黄",
        "kcalPer100": 378,
        "proteinPer100": 14.5,
        "carbsPer100": 4,
        "fatPer100": 33.8
    },
    {
        "name": "鸭盹",
        "kcalPer100": 92,
        "proteinPer100": 17.9,
        "carbsPer100": 2.1,
        "fatPer100": 1.3
    },
    {
        "name": "鸭盹 (母麻鸭)",
        "kcalPer100": 126,
        "proteinPer100": 20.4,
        "carbsPer100": 1.6,
        "fatPer100": 4.2
    },
    {
        "name": "鸭肝",
        "kcalPer100": 128,
        "proteinPer100": 14.5,
        "carbsPer100": 0.5,
        "fatPer100": 7.5
    },
    {
        "name": "鸭肝(公麻鸭)",
        "kcalPer100": 136,
        "proteinPer100": 14.7,
        "carbsPer100": 10.1,
        "fatPer100": 4.1
    },
    {
        "name": "鸭肝（母麻鸭)",
        "kcalPer100": 113,
        "proteinPer100": 16.8,
        "carbsPer100": 5.9,
        "fatPer100": 2.5
    },
    {
        "name": "鸭广梨",
        "kcalPer100": 60,
        "proteinPer100": 0.6,
        "carbsPer100": 5.1,
        "fatPer100": 0.2
    },
    {
        "name": "鸭梨",
        "kcalPer100": 45,
        "proteinPer100": 0.2,
        "carbsPer100": 1.1,
        "fatPer100": 0.2
    },
    {
        "name": "鸭皮",
        "kcalPer100": 538,
        "proteinPer100": 6.5,
        "carbsPer100": 15.1,
        "fatPer100": 50.2
    },
    {
        "name": "鸭舌",
        "kcalPer100": 245,
        "proteinPer100": 16.6,
        "carbsPer100": 0.4,
        "fatPer100": 19.7,
        "aliases": [
            "鸭条"
        ]
    },
    {
        "name": "鸭心",
        "kcalPer100": 143,
        "proteinPer100": 12.8,
        "carbsPer100": 2.9,
        "fatPer100": 8.9
    },
    {
        "name": "鸭胸脯肉",
        "kcalPer100": 90,
        "proteinPer100": 15,
        "carbsPer100": 4,
        "fatPer100": 1.5
    },
    {
        "name": "鸭血 (白鸭)",
        "kcalPer100": 108,
        "proteinPer100": 13.6,
        "carbsPer100": 12.4,
        "fatPer100": 0.4
    },
    {
        "name": "鸭血 (母麻鸭)",
        "kcalPer100": 55,
        "proteinPer100": 13.1,
        "carbsPer100": 0,
        "fatPer100": 0.3
    },
    {
        "name": "鸭血（公麻鸭）",
        "kcalPer100": 56,
        "proteinPer100": 13.2,
        "carbsPer100": 0,
        "fatPer100": 0.4
    },
    {
        "name": "鸭胰",
        "kcalPer100": 117,
        "proteinPer100": 21.7,
        "carbsPer100": 1,
        "fatPer100": 2.9
    },
    {
        "name": "鸭掌",
        "kcalPer100": 150,
        "proteinPer100": 26.9,
        "carbsPer100": 6.2,
        "fatPer100": 1.9
    },
    {
        "name": "鸭跖草(鲜)竹叶菜,淡竹叶]",
        "kcalPer100": 144,
        "proteinPer100": 2.8,
        "carbsPer100": 5.7,
        "fatPer100": 0.3
    },
    {
        "name": "雅鱼",
        "kcalPer100": 131,
        "proteinPer100": 26.5,
        "carbsPer100": 0.1,
        "fatPer100": 2.7
    },
    {
        "name": "胭脂鱼 (养殖)",
        "kcalPer100": 162,
        "proteinPer100": 38.8,
        "carbsPer100": 0.4,
        "fatPer100": 0.6
    },
    {
        "name": "盐水鸭 (熟)",
        "kcalPer100": 313,
        "proteinPer100": 16.6,
        "carbsPer100": 2.8,
        "fatPer100": 26.1
    },
    {
        "name": "燕麦",
        "kcalPer100": 338,
        "proteinPer100": 10.1,
        "carbsPer100": 77.4,
        "fatPer100": 0.2
    },
    {
        "name": "燕窝",
        "kcalPer100": 320,
        "proteinPer100": 57.9,
        "carbsPer100": 21.7,
        "fatPer100": 0.2
    },
    {
        "name": "羊大肠",
        "kcalPer100": 75,
        "proteinPer100": 13.4,
        "carbsPer100": 0,
        "fatPer100": 2.4
    },
    {
        "name": "羊肚",
        "kcalPer100": 87,
        "proteinPer100": 12.2,
        "carbsPer100": 1.8,
        "fatPer100": 3.4
    },
    {
        "name": "羊肚菌（干）",
        "kcalPer100": 321,
        "proteinPer100": 26.9,
        "carbsPer100": 12.9,
        "fatPer100": 7.1,
        "aliases": [
            "干狼肚"
        ]
    },
    {
        "name": "羊肺",
        "kcalPer100": 96,
        "proteinPer100": 16.2,
        "carbsPer100": 2.5,
        "fatPer100": 2.4
    },
    {
        "name": "羊肝",
        "kcalPer100": 134,
        "proteinPer100": 17.9,
        "carbsPer100": 7.4,
        "fatPer100": 3.6
    },
    {
        "name": "羊脑",
        "kcalPer100": 142,
        "proteinPer100": 11.3,
        "carbsPer100": 0.1,
        "fatPer100": 10.7
    },
    {
        "name": "羊肉 (冻)",
        "kcalPer100": 285,
        "proteinPer100": 12.6,
        "carbsPer100": 3.8,
        "fatPer100": 24.4
    },
    {
        "name": "羊肉 (后腿)",
        "kcalPer100": 111,
        "proteinPer100": 20.6,
        "carbsPer100": 0,
        "fatPer100": 3.2
    },
    {
        "name": "羊肉 (颈)",
        "kcalPer100": 135,
        "proteinPer100": 21.3,
        "carbsPer100": 2.2,
        "fatPer100": 4.6
    },
    {
        "name": "羊肉 (里脊)",
        "kcalPer100": 103,
        "proteinPer100": 20.5,
        "carbsPer100": 1.6,
        "fatPer100": 1.6
    },
    {
        "name": "羊肉 (青羊)",
        "kcalPer100": 99,
        "proteinPer100": 21.3,
        "carbsPer100": 1,
        "fatPer100": 1.1
    },
    {
        "name": "羊肉 (熟)",
        "kcalPer100": 217,
        "proteinPer100": 23.2,
        "carbsPer100": 0,
        "fatPer100": 13.8
    },
    {
        "name": "羊肉 (腰窝)",
        "kcalPer100": 135,
        "proteinPer100": 18.9,
        "carbsPer100": 0,
        "fatPer100": 6.6
    },
    {
        "name": "羊肉（代表值，fat7g)",
        "kcalPer100": 139,
        "proteinPer100": 18.5,
        "carbsPer100": 1.6,
        "fatPer100": 6.5,
        "aliases": [
            "羊肉"
        ]
    },
    {
        "name": "羊肉（后腿，带骨)",
        "kcalPer100": 110,
        "proteinPer100": 19.5,
        "carbsPer100": 0.3,
        "fatPer100": 3.4
    },
    {
        "name": "羊肉(前腿，fat3g)",
        "kcalPer100": 110,
        "proteinPer100": 18.6,
        "carbsPer100": 1.6,
        "fatPer100": 3.2
    },
    {
        "name": "羊肉（前腿)",
        "kcalPer100": 97,
        "proteinPer100": 19.8,
        "carbsPer100": 0,
        "fatPer100": 2
    },
    {
        "name": "羊肉（上脑）",
        "kcalPer100": 94,
        "proteinPer100": 19,
        "carbsPer100": 0,
        "fatPer100": 2
    },
    {
        "name": "羊肉（胸脯）",
        "kcalPer100": 133,
        "proteinPer100": 19.4,
        "carbsPer100": 0,
        "fatPer100": 6.2
    },
    {
        "name": "羊肉（羊肉手抓）",
        "kcalPer100": 188,
        "proteinPer100": 27.3,
        "carbsPer100": 0,
        "fatPer100": 8.8
    },
    {
        "name": "羊肉(fat4g)",
        "kcalPer100": 118,
        "proteinPer100": 20.5,
        "carbsPer100": 0.2,
        "fatPer100": 3.9
    },
    {
        "name": "羊肉串 (电烤)",
        "kcalPer100": 234,
        "proteinPer100": 26.4,
        "carbsPer100": 6,
        "fatPer100": 11.6
    },
    {
        "name": "羊肉串 (烤)",
        "kcalPer100": 206,
        "proteinPer100": 26,
        "carbsPer100": 2.4,
        "fatPer100": 10.3
    },
    {
        "name": "羊肉串 (生)",
        "kcalPer100": 118,
        "proteinPer100": 13,
        "carbsPer100": 5.6,
        "fatPer100": 4.8
    },
    {
        "name": "羊肉串 (炸)",
        "kcalPer100": 217,
        "proteinPer100": 18.3,
        "carbsPer100": 10,
        "fatPer100": 11.5
    },
    {
        "name": "羊肉干",
        "kcalPer100": 588,
        "proteinPer100": 28.2,
        "carbsPer100": 13.7,
        "fatPer100": 46.7
    },
    {
        "name": "羊肉片",
        "kcalPer100": 118,
        "proteinPer100": 18,
        "carbsPer100": 2.4,
        "fatPer100": 4
    },
    {
        "name": "羊乳",
        "kcalPer100": 59,
        "proteinPer100": 1.5,
        "carbsPer100": 5.4,
        "fatPer100": 3.5
    },
    {
        "name": "羊舌",
        "kcalPer100": 225,
        "proteinPer100": 19.4,
        "carbsPer100": 4.8,
        "fatPer100": 14.2
    },
    {
        "name": "羊肾",
        "kcalPer100": 96,
        "proteinPer100": 16.6,
        "carbsPer100": 1,
        "fatPer100": 2.8
    },
    {
        "name": "羊蹄筋 (生)",
        "kcalPer100": 159,
        "proteinPer100": 34.3,
        "carbsPer100": 0,
        "fatPer100": 2.4
    },
    {
        "name": "羊心",
        "kcalPer100": 113,
        "proteinPer100": 13.8,
        "carbsPer100": 2,
        "fatPer100": 5.5
    },
    {
        "name": "羊血",
        "kcalPer100": 57,
        "proteinPer100": 6.8,
        "carbsPer100": 6.9,
        "fatPer100": 0.2
    },
    {
        "name": "杨梅",
        "kcalPer100": 30,
        "proteinPer100": 0.8,
        "carbsPer100": 6.7,
        "fatPer100": 0.2,
        "aliases": [
            "树梅",
            "山杨梅"
        ]
    },
    {
        "name": "杨桃",
        "kcalPer100": 31,
        "proteinPer100": 0.6,
        "carbsPer100": 7.4,
        "fatPer100": 0.2
    },
    {
        "name": "洋葱（白皮，脱水）",
        "kcalPer100": 342,
        "proteinPer100": 5.5,
        "carbsPer100": 81.9,
        "fatPer100": 0.4
    },
    {
        "name": "洋葱（鲜）",
        "kcalPer100": 40,
        "proteinPer100": 1.1,
        "carbsPer100": 9,
        "fatPer100": 0.2,
        "aliases": [
            "葱头"
        ]
    },
    {
        "name": "洋丝瓜苗",
        "kcalPer100": 29,
        "proteinPer100": 4.4,
        "carbsPer100": 2.2,
        "fatPer100": 0.3
    },
    {
        "name": "腰果（熟）",
        "kcalPer100": 615,
        "proteinPer100": 24,
        "carbsPer100": 10.4,
        "fatPer100": 50.9
    },
    {
        "name": "椰子",
        "kcalPer100": 241,
        "proteinPer100": 4,
        "carbsPer100": 31.3,
        "fatPer100": 12.1
    },
    {
        "name": "野葱（鲜）",
        "kcalPer100": 152,
        "proteinPer100": 2.7,
        "carbsPer100": 6.7,
        "fatPer100": 0.2,
        "aliases": [
            "沙葱",
            "麦葱"
        ]
    },
    {
        "name": "野韭菜（鲜）",
        "kcalPer100": 182,
        "proteinPer100": 3.7,
        "carbsPer100": 7.2,
        "fatPer100": 0.9,
        "aliases": [
            "山韭"
        ]
    },
    {
        "name": "野菊（鲜）",
        "kcalPer100": 195,
        "proteinPer100": 3.2,
        "carbsPer100": 9,
        "fatPer100": 0.5
    },
    {
        "name": "野山鸡",
        "kcalPer100": 126,
        "proteinPer100": 20.4,
        "carbsPer100": 6.6,
        "fatPer100": 2
    },
    {
        "name": "野蒜（鲜）",
        "kcalPer100": 144,
        "proteinPer100": 1,
        "carbsPer100": 7.7,
        "fatPer100": 0.4,
        "aliases": [
            "小蒜",
            "野葱"
        ]
    },
    {
        "name": "叶甜菜（白梗）",
        "kcalPer100": 13,
        "proteinPer100": 1.6,
        "carbsPer100": 2.8,
        "fatPer100": 0.1
    },
    {
        "name": "贻贝（干）",
        "kcalPer100": 355,
        "proteinPer100": 47.8,
        "carbsPer100": 20.1,
        "fatPer100": 9.3,
        "aliases": [
            "淡菜",
            "壳菜"
        ]
    },
    {
        "name": "贻贝（鲜）",
        "kcalPer100": 80,
        "proteinPer100": 11.4,
        "carbsPer100": 4.7,
        "fatPer100": 1.7,
        "aliases": [
            "淡菜",
            "壳菜"
        ]
    },
    {
        "name": "缢蛏（鲜）",
        "kcalPer100": 73,
        "proteinPer100": 8.6,
        "carbsPer100": 5.6,
        "fatPer100": 1.8
    },
    {
        "name": "茵陈蒿（鲜）",
        "kcalPer100": 273,
        "proteinPer100": 5.6,
        "carbsPer100": 4.4,
        "fatPer100": 12,
        "aliases": [
            "茵陈"
        ]
    },
    {
        "name": "银蚶",
        "kcalPer100": 71,
        "proteinPer100": 12.2,
        "carbsPer100": 2.3,
        "fatPer100": 1.4,
        "aliases": [
            "蚶子"
        ]
    },
    {
        "name": "银鱼",
        "kcalPer100": 105,
        "proteinPer100": 17.2,
        "carbsPer100": 0,
        "fatPer100": 4,
        "aliases": [
            "面条鱼"
        ]
    },
    {
        "name": "蚓",
        "kcalPer100": 77,
        "proteinPer100": 16,
        "carbsPer100": 0,
        "fatPer100": 1.4,
        "aliases": [
            "大头虾"
        ]
    },
    {
        "name": "印度苹果",
        "kcalPer100": 54,
        "proteinPer100": 0.6,
        "carbsPer100": 14.8,
        "fatPer100": 0.2
    },
    {
        "name": "婴儿配方奶粉（合生元超 级呵护婴儿配方奶粉1阶段)",
        "kcalPer100": 503,
        "proteinPer100": 11.8,
        "carbsPer100": 58.7,
        "fatPer100": 25
    },
    {
        "name": "婴儿配方奶粉（惠氏金装 爱儿乐婴儿配方奶粉）",
        "kcalPer100": 534,
        "proteinPer100": 11,
        "carbsPer100": 58.4,
        "fatPer100": 29
    },
    {
        "name": "婴儿配方奶粉（美赞臣安 婴儿婴儿配方奶粉）",
        "kcalPer100": 514,
        "proteinPer100": 10.5,
        "carbsPer100": 61,
        "fatPer100": 26
    },
    {
        "name": "婴儿配方奶粉（三元爱欣 宝金装婴儿配方奶粉)",
        "kcalPer100": 517,
        "proteinPer100": 27.3,
        "carbsPer100": 1.6,
        "fatPer100": 56.1
    },
    {
        "name": "婴儿配方奶粉（三元金装 爱力优婴儿配方奶粉)",
        "kcalPer100": 515,
        "proteinPer100": 27.5,
        "carbsPer100": 1,
        "fatPer100": 55
    },
    {
        "name": "婴儿配方奶粉（特选初生 婴儿配方奶粉1阶段)",
        "kcalPer100": 514,
        "proteinPer100": 26.8,
        "carbsPer100": 0.6,
        "fatPer100": 56.2
    },
    {
        "name": "婴儿配方奶粉（完达山育儿 慧金装婴儿配方奶粉1阶段)",
        "kcalPer100": 508,
        "proteinPer100": 25.8,
        "carbsPer100": 0.5,
        "fatPer100": 56.8
    },
    {
        "name": "婴儿配方奶粉（雅培金装 亲护乳蛋白部分水解婴儿配 方奶粉1阶段)",
        "kcalPer100": 512,
        "proteinPer100": 27.5,
        "carbsPer100": 1.1,
        "fatPer100": 54.9
    },
    {
        "name": "樱桃",
        "kcalPer100": 46,
        "proteinPer100": 1.1,
        "carbsPer100": 10.2,
        "fatPer100": 0.2
    },
    {
        "name": "樱桃 (野，白刺)",
        "kcalPer100": 304,
        "proteinPer100": 11.4,
        "carbsPer100": 59.8,
        "fatPer100": 3.9
    },
    {
        "name": "樱桃番茄",
        "kcalPer100": 25,
        "proteinPer100": 1,
        "carbsPer100": 5.8,
        "fatPer100": 0.2,
        "aliases": [
            "小西红柿"
        ]
    },
    {
        "name": "樱桃萝卜",
        "kcalPer100": 12,
        "proteinPer100": 0.9,
        "carbsPer100": 3,
        "fatPer100": 0.1
    },
    {
        "name": "樱桃萝卜缨",
        "kcalPer100": 14,
        "proteinPer100": 2,
        "carbsPer100": 2.7,
        "fatPer100": 0.1
    },
    {
        "name": "鹰嘴豆",
        "kcalPer100": 340,
        "proteinPer100": 21.2,
        "carbsPer100": 60.1,
        "fatPer100": 4.2,
        "aliases": [
            "桃豆"
        ]
    },
    {
        "name": "硬质干酪",
        "kcalPer100": 411,
        "proteinPer100": 24.9,
        "carbsPer100": 0.1,
        "fatPer100": 34.5
    },
    {
        "name": "鳙鱼",
        "kcalPer100": 100,
        "proteinPer100": 15.3,
        "carbsPer100": 4.7,
        "fatPer100": 2.2,
        "aliases": [
            "胖头鱼",
            "摆佳鱼",
            "鲢鱼"
        ]
    },
    {
        "name": "优糯米",
        "kcalPer100": 345,
        "proteinPer100": 9,
        "carbsPer100": 75.3,
        "fatPer100": 1
    },
    {
        "name": "油饼",
        "kcalPer100": 403,
        "proteinPer100": 7.9,
        "carbsPer100": 42.4,
        "fatPer100": 22.9
    },
    {
        "name": "油菜",
        "kcalPer100": 14,
        "proteinPer100": 1.3,
        "carbsPer100": 2,
        "fatPer100": 0.5
    },
    {
        "name": "油菜 (黑)",
        "kcalPer100": 19,
        "proteinPer100": 1.8,
        "carbsPer100": 2.9,
        "fatPer100": 0.2
    },
    {
        "name": "油菜 (脱水）",
        "kcalPer100": 316,
        "proteinPer100": 7.6,
        "carbsPer100": 74.3,
        "fatPer100": 0.6
    },
    {
        "name": "油菜（小)",
        "kcalPer100": 12,
        "proteinPer100": 1.3,
        "carbsPer100": 1.6,
        "fatPer100": 0.2
    },
    {
        "name": "油菜墓",
        "kcalPer100": 24,
        "proteinPer100": 3.2,
        "carbsPer100": 3,
        "fatPer100": 0.4,
        "aliases": [
            "菜墓"
        ]
    },
    {
        "name": "油菜心",
        "kcalPer100": 15,
        "proteinPer100": 1.3,
        "carbsPer100": 2.7,
        "fatPer100": 0.4
    },
    {
        "name": "油豆腐",
        "kcalPer100": 245,
        "proteinPer100": 17,
        "carbsPer100": 4.9,
        "fatPer100": 17.6
    },
    {
        "name": "油豆角（鲜）",
        "kcalPer100": 25,
        "proteinPer100": 2.4,
        "carbsPer100": 3.9,
        "fatPer100": 0.3,
        "aliases": [
            "多花菜豆"
        ]
    },
    {
        "name": "油麦菜",
        "kcalPer100": 12,
        "proteinPer100": 1.1,
        "carbsPer100": 2.1,
        "fatPer100": 0.4
    },
    {
        "name": "油面筋",
        "kcalPer100": 492,
        "proteinPer100": 26.9,
        "carbsPer100": 40.4,
        "fatPer100": 25.1
    },
    {
        "name": "油抒",
        "kcalPer100": 145,
        "proteinPer100": 15.9,
        "carbsPer100": 0,
        "fatPer100": 9,
        "aliases": [
            "香梭鱼"
        ]
    },
    {
        "name": "油条",
        "kcalPer100": 388,
        "proteinPer100": 6.9,
        "carbsPer100": 51,
        "fatPer100": 17.6
    },
    {
        "name": "莜麦面",
        "kcalPer100": 391,
        "proteinPer100": 13.7,
        "carbsPer100": 67.7,
        "fatPer100": 8.6
    },
    {
        "name": "鱿鱼",
        "kcalPer100": 194,
        "proteinPer100": 18.7,
        "carbsPer100": 4.4,
        "fatPer100": 11.3,
        "aliases": [
            "马鲛鱼"
        ]
    },
    {
        "name": "鱿鱼 (水浸)",
        "kcalPer100": 75,
        "proteinPer100": 17,
        "carbsPer100": 0,
        "fatPer100": 0.8
    },
    {
        "name": "鱿鱼 (鲜，中国枪乌贼)",
        "kcalPer100": 84,
        "proteinPer100": 17.4,
        "carbsPer100": 0,
        "fatPer100": 1.6,
        "aliases": [
            "枪乌贼"
        ]
    },
    {
        "name": "鱿鱼(干，中国枪乌贼)",
        "kcalPer100": 313,
        "proteinPer100": 60,
        "carbsPer100": 7.8,
        "fatPer100": 4.6
    },
    {
        "name": "鱿鱼肉",
        "kcalPer100": 102,
        "proteinPer100": 23.7,
        "carbsPer100": 1,
        "fatPer100": 0.3,
        "aliases": [
            "马鲛鱼肉"
        ]
    },
    {
        "name": "幼儿配方奶粉（多美滋多 学1加幼儿配方奶粉3阶段)",
        "kcalPer100": 450,
        "proteinPer100": 16,
        "carbsPer100": 1.2,
        "fatPer100": 61.1
    },
    {
        "name": "幼儿配方奶粉（三元爱力 优幼儿配方奶粉）",
        "kcalPer100": 465,
        "proteinPer100": 19.5,
        "carbsPer100": 0.9,
        "fatPer100": 54.1
    },
    {
        "name": "幼儿配方奶粉（完达山育儿 慧金装幼儿配方奶粉3阶段)",
        "kcalPer100": 483,
        "proteinPer100": 22,
        "carbsPer100": 0.9,
        "fatPer100": 55.6
    },
    {
        "name": "幼儿配方奶粉（伊利金领 冠幼儿配方奶粉）",
        "kcalPer100": 2,
        "proteinPer100": 20.5,
        "carbsPer100": 1,
        "fatPer100": 54.3
    },
    {
        "name": "柚",
        "kcalPer100": 42,
        "proteinPer100": 0.8,
        "carbsPer100": 9.5,
        "fatPer100": 0.2,
        "aliases": [
            "文旦"
        ]
    },
    {
        "name": "余柑子",
        "kcalPer100": 45,
        "proteinPer100": 0.3,
        "carbsPer100": 12.4,
        "fatPer100": 0.1,
        "aliases": [
            "油柑子"
        ]
    },
    {
        "name": "鱼",
        "kcalPer100": 114,
        "proteinPer100": 17.5,
        "carbsPer100": 1.2,
        "fatPer100": 4.3,
        "aliases": [
            "猴鱼"
        ]
    },
    {
        "name": "鱼",
        "kcalPer100": 103,
        "proteinPer100": 17.3,
        "carbsPer100": 0,
        "fatPer100": 3.7,
        "aliases": [
            "胡子鲈",
            "鲢胡",
            "旺虾"
        ]
    },
    {
        "name": "鱼",
        "kcalPer100": 143,
        "proteinPer100": 14.8,
        "carbsPer100": 10.8,
        "fatPer100": 4.5
    },
    {
        "name": "鱼",
        "kcalPer100": 124,
        "proteinPer100": 18.5,
        "carbsPer100": 4.8,
        "fatPer100": 3.4,
        "aliases": [
            "蓝圆",
            "边鱼"
        ]
    },
    {
        "name": "鱼",
        "kcalPer100": 121,
        "proteinPer100": 21.2,
        "carbsPer100": 2.1,
        "fatPer100": 3.1,
        "aliases": [
            "马鲛鱼",
            "燕鱿鱼",
            "巴鱼"
        ]
    },
    {
        "name": "鱼",
        "kcalPer100": 119,
        "proteinPer100": 18.9,
        "carbsPer100": 0,
        "fatPer100": 4.8,
        "aliases": [
            "白眼棱鱼"
        ]
    },
    {
        "name": "鱼",
        "kcalPer100": 90,
        "proteinPer100": 20.8,
        "carbsPer100": 0,
        "fatPer100": 0.7,
        "aliases": [
            "夫鱼"
        ]
    },
    {
        "name": "鱼",
        "kcalPer100": 159,
        "proteinPer100": 20.7,
        "carbsPer100": 0,
        "fatPer100": 8.5,
        "aliases": [
            "快鱼",
            "力鱼"
        ]
    },
    {
        "name": "鱼",
        "kcalPer100": 89,
        "proteinPer100": 20.2,
        "carbsPer100": 0,
        "fatPer100": 0.9,
        "aliases": [
            "鳖鱼"
        ]
    },
    {
        "name": "鱼 (鲜，刺)",
        "kcalPer100": 149,
        "proteinPer100": 16.8,
        "carbsPer100": 5.9,
        "fatPer100": 6.5
    },
    {
        "name": "鱼 (蒸)",
        "kcalPer100": 390,
        "proteinPer100": 14.6,
        "carbsPer100": 0.7,
        "fatPer100": 36.5
    },
    {
        "name": "鱼 (煮)",
        "kcalPer100": 372,
        "proteinPer100": 14.9,
        "carbsPer100": 0.4,
        "fatPer100": 34.5
    },
    {
        "name": "鱼（大)",
        "kcalPer100": 106,
        "proteinPer100": 13.2,
        "carbsPer100": 0.8,
        "fatPer100": 5.5,
        "aliases": [
            "大凤尾鱼"
        ]
    },
    {
        "name": "鱼（烤，150℃，20分）",
        "kcalPer100": 390,
        "proteinPer100": 19.1,
        "carbsPer100": 0,
        "fatPer100": 34.8
    },
    {
        "name": "鱼（咸）",
        "kcalPer100": 157,
        "proteinPer100": 23.3,
        "carbsPer100": 12.4,
        "fatPer100": 1.6,
        "aliases": [
            "咸马胶"
        ]
    },
    {
        "name": "鱼（小）",
        "kcalPer100": 124,
        "proteinPer100": 15.5,
        "carbsPer100": 4,
        "fatPer100": 5.1,
        "aliases": [
            "小凤尾鱼"
        ]
    },
    {
        "name": "鱼（银鱼）",
        "kcalPer100": 140,
        "proteinPer100": 18.5,
        "carbsPer100": 0,
        "fatPer100": 7.3,
        "aliases": [
            "平鱼"
        ]
    },
    {
        "name": "鱼翅 (干)",
        "kcalPer100": 362,
        "proteinPer100": 88.4,
        "carbsPer100": 0,
        "fatPer100": 0.9
    },
    {
        "name": "鱼唇 (干)",
        "kcalPer100": 347,
        "proteinPer100": 83.1,
        "carbsPer100": 0,
        "fatPer100": 1.6
    },
    {
        "name": "鱼肚 (干)",
        "kcalPer100": 312,
        "proteinPer100": 75.6,
        "carbsPer100": 0,
        "fatPer100": 1
    },
    {
        "name": "鱼排",
        "kcalPer100": 160,
        "proteinPer100": 10.1,
        "carbsPer100": 24.5,
        "fatPer100": 2.4
    },
    {
        "name": "鱼片干",
        "kcalPer100": 303,
        "proteinPer100": 46.1,
        "carbsPer100": 22,
        "fatPer100": 3.4
    },
    {
        "name": "鱼奇油",
        "kcalPer100": 47,
        "proteinPer100": 11.2,
        "carbsPer100": 0,
        "fatPer100": 0.2,
        "aliases": [
            "鱼露",
            "虾油"
        ]
    },
    {
        "name": "鱼丸",
        "kcalPer100": 107,
        "proteinPer100": 11.1,
        "carbsPer100": 12.7,
        "fatPer100": 1.3
    },
    {
        "name": "鱼子酱",
        "kcalPer100": 201,
        "proteinPer100": 9.6,
        "carbsPer100": 24.7,
        "fatPer100": 7.1
    },
    {
        "name": "榆钱(鲜)",
        "kcalPer100": 187,
        "proteinPer100": 4.8,
        "carbsPer100": 4.3,
        "fatPer100": 7.6
    },
    {
        "name": "羽衣甘蓝",
        "kcalPer100": 69,
        "proteinPer100": 5,
        "carbsPer100": 5.7,
        "fatPer100": 0.4
    },
    {
        "name": "玉兰片",
        "kcalPer100": 66,
        "proteinPer100": 2.6,
        "carbsPer100": 18.6,
        "fatPer100": 0.4
    },
    {
        "name": "玉米 (白，干)",
        "kcalPer100": 352,
        "proteinPer100": 8.8,
        "carbsPer100": 74.7,
        "fatPer100": 3.8
    },
    {
        "name": "玉米 (黄，干)",
        "kcalPer100": 348,
        "proteinPer100": 8.7,
        "carbsPer100": 73,
        "fatPer100": 3.8
    },
    {
        "name": "玉米 (鲜)",
        "kcalPer100": 112,
        "proteinPer100": 4,
        "carbsPer100": 22.8,
        "fatPer100": 1.2,
        "unitWeight": 300,
        "unitName": "根"
    },
    {
        "name": "玉米淀粉",
        "kcalPer100": 346,
        "proteinPer100": 1.2,
        "carbsPer100": 85,
        "fatPer100": 0.1
    },
    {
        "name": "玉米粒 (黄、干)",
        "kcalPer100": 327,
        "proteinPer100": 8,
        "carbsPer100": 79.2,
        "fatPer100": 0.8
    },
    {
        "name": "玉米面 (白)",
        "kcalPer100": 352,
        "proteinPer100": 8,
        "carbsPer100": 73.1,
        "fatPer100": 4.5
    },
    {
        "name": "玉米面 (黄)",
        "kcalPer100": 350,
        "proteinPer100": 8.5,
        "carbsPer100": 78.4,
        "fatPer100": 1.5
    },
    {
        "name": "玉米面 (强化豆粉)",
        "kcalPer100": 352,
        "proteinPer100": 11.8,
        "carbsPer100": 68.3,
        "fatPer100": 4.9
    },
    {
        "name": "玉米面面条",
        "kcalPer100": 350,
        "proteinPer100": 6.6,
        "carbsPer100": 80.5,
        "fatPer100": 0.3
    },
    {
        "name": "玉米糁 (黄)",
        "kcalPer100": 326,
        "proteinPer100": 7.4,
        "carbsPer100": 78.7,
        "fatPer100": 1.2
    },
    {
        "name": "玉米笋 (罐头)",
        "kcalPer100": 16,
        "proteinPer100": 1.1,
        "carbsPer100": 4.9,
        "fatPer100": 0.2
    },
    {
        "name": "芋头",
        "kcalPer100": 56,
        "proteinPer100": 1.3,
        "carbsPer100": 12.7,
        "fatPer100": 0.2,
        "aliases": [
            "芋书",
            "毛芋"
        ]
    },
    {
        "name": "芋头 (煮)",
        "kcalPer100": 60,
        "proteinPer100": 2.9,
        "carbsPer100": 13,
        "fatPer100": 0.1
    },
    {
        "name": "元蘑（干）",
        "kcalPer100": 245,
        "proteinPer100": 12.3,
        "carbsPer100": 70.3,
        "fatPer100": 1.5,
        "aliases": [
            "亚侧耳",
            "冬蘑",
            "黄蘑"
        ]
    },
    {
        "name": "原味营养肉酥）",
        "kcalPer100": 420,
        "proteinPer100": 25,
        "carbsPer100": 35,
        "fatPer100": 20
    },
    {
        "name": "圆白菜，卷心菜",
        "kcalPer100": 24,
        "proteinPer100": 1.5,
        "carbsPer100": 4.6,
        "fatPer100": 0.2
    },
    {
        "name": "芸豆 (干，红)",
        "kcalPer100": 331,
        "proteinPer100": 21.4,
        "carbsPer100": 8.3,
        "fatPer100": 62.5
    },
    {
        "name": "芸豆（干，白)",
        "kcalPer100": 315,
        "proteinPer100": 1.4,
        "carbsPer100": 9.8,
        "fatPer100": 57.2
    },
    {
        "name": "芸豆（千，虎皮）",
        "kcalPer100": 341,
        "proteinPer100": 22.5,
        "carbsPer100": 3.5,
        "fatPer100": 62.5
    },
    {
        "name": "芸豆（鲜）",
        "kcalPer100": 30,
        "proteinPer100": 0.8,
        "carbsPer100": 7.4,
        "fatPer100": 0.1
    },
    {
        "name": "孕产妇配方奶粉 (惠氏)",
        "kcalPer100": 405,
        "proteinPer100": 16,
        "carbsPer100": 70,
        "fatPer100": 6.8
    },
    {
        "name": "孕产妇配方奶粉（贝因美 冠军宝贝孕妈咪配方奶粉）",
        "kcalPer100": 425,
        "proteinPer100": 22.5,
        "carbsPer100": 59,
        "fatPer100": 12
    },
    {
        "name": "孕产妇配方奶粉（贝因美 金装爱+孕妈咪配方奶粉）",
        "kcalPer100": 434,
        "proteinPer100": 22.5,
        "carbsPer100": 59,
        "fatPer100": 12
    },
    {
        "name": "孕产妇配方奶粉（贝因美 金装爱+准妈咪配方奶粉)",
        "kcalPer100": 426,
        "proteinPer100": 22.5,
        "carbsPer100": 61.5,
        "fatPer100": 10
    },
    {
        "name": "孕产妇配方奶粉（代表值）",
        "kcalPer100": 413,
        "proteinPer100": 22,
        "carbsPer100": 60.5,
        "fatPer100": 9.8,
        "aliases": [
            "孕产妇配方奶粉"
        ]
    },
    {
        "name": "孕产妇配方奶粉（多美滋 优阶妈妈孕产妇配方奶粉）",
        "kcalPer100": 360,
        "proteinPer100": 20.5,
        "carbsPer100": 67.4,
        "fatPer100": 2.5
    },
    {
        "name": "孕产妇配方奶粉（飞帆孕 产妇配方乳粉）",
        "kcalPer100": 460,
        "proteinPer100": 18,
        "carbsPer100": 57.7,
        "fatPer100": 17.5
    },
    {
        "name": "孕产妇配方奶粉（合生元 金装妈妈配方奶粉）",
        "kcalPer100": 380,
        "proteinPer100": 27,
        "carbsPer100": 62.7,
        "fatPer100": 2.8
    },
    {
        "name": "孕产妇配方奶粉（亨氏超 金妈妈孕产妇配方奶粉)",
        "kcalPer100": 398,
        "proteinPer100": 26,
        "carbsPer100": 57,
        "fatPer100": 8
    },
    {
        "name": "孕产妇配方奶粉（惠氏爱 儿乐妈妈孕产妇配方奶粉）",
        "kcalPer100": 406,
        "proteinPer100": 19,
        "carbsPer100": 67,
        "fatPer100": 6.9
    },
    {
        "name": "孕产妇配方奶粉（美素佳 儿GOLD金装妈妈孕产妇 配方奶粉)",
        "kcalPer100": 454,
        "proteinPer100": 27,
        "carbsPer100": 47.1,
        "fatPer100": 17.5
    },
    {
        "name": "孕产妇配方奶粉（美赞臣 安婴妈妈孕产妇配方奶粉）",
        "kcalPer100": 383,
        "proteinPer100": 24,
        "carbsPer100": 62,
        "fatPer100": 4.3
    },
    {
        "name": "孕产妇配方奶粉(美赞臣)",
        "kcalPer100": 378,
        "proteinPer100": 23.3,
        "carbsPer100": 62.4,
        "fatPer100": 3.9
    },
    {
        "name": "孕产妇配方奶粉（雀巢妈 妈孕产妇奶粉)",
        "kcalPer100": 407,
        "proteinPer100": 20,
        "carbsPer100": 67,
        "fatPer100": 6.5
    },
    {
        "name": "孕产妇配方奶粉（雀巢妈 妈孕产妇营养配方奶粉）",
        "kcalPer100": 402,
        "proteinPer100": 20,
        "carbsPer100": 67,
        "fatPer100": 6
    },
    {
        "name": "孕产妇配方奶粉（三元爱 力优妈妈配方奶粉）",
        "kcalPer100": 438,
        "proteinPer100": 22.5,
        "carbsPer100": 56.3,
        "fatPer100": 13.8
    },
    {
        "name": "孕产妇配方奶粉（完达山 妈咪配方奶粉）",
        "kcalPer100": 455,
        "proteinPer100": 22.5,
        "carbsPer100": 1.2,
        "fatPer100": 52.4
    },
    {
        "name": "孕产妇配方奶粉（雅培妈妈 喜康素金装孕产妇配方奶粉)",
        "kcalPer100": 367,
        "proteinPer100": 23.1,
        "carbsPer100": 3.7,
        "fatPer100": 66
    },
    {
        "name": "孕产妇配方奶粉（雅士利 能慧金装孕产妇奶粉)",
        "kcalPer100": 425,
        "proteinPer100": 20.6,
        "carbsPer100": 3,
        "fatPer100": 59
    },
    {
        "name": "孕产妇配方奶粉（伊利金 领冠妈妈配方奶粉）",
        "kcalPer100": 456,
        "proteinPer100": 22,
        "carbsPer100": 0.9,
        "fatPer100": 60.9
    },
    {
        "name": "早灿",
        "kcalPer100": 361,
        "proteinPer100": 9.9,
        "carbsPer100": 76.2,
        "fatPer100": 2.2
    },
    {
        "name": "早灿 (标一)",
        "kcalPer100": 352,
        "proteinPer100": 8.8,
        "carbsPer100": 77.2,
        "fatPer100": 1
    },
    {
        "name": "早粗 (特等)",
        "kcalPer100": 347,
        "proteinPer100": 9.1,
        "carbsPer100": 76.7,
        "fatPer100": 0.6
    },
    {
        "name": "早橘",
        "kcalPer100": 57,
        "proteinPer100": 1.2,
        "carbsPer100": 12.6,
        "fatPer100": 0.2
    },
    {
        "name": "早糯谷",
        "kcalPer100": 360,
        "proteinPer100": 7.1,
        "carbsPer100": 77,
        "fatPer100": 3.2
    },
    {
        "name": "早酥梨",
        "kcalPer100": 50,
        "proteinPer100": 0.2,
        "carbsPer100": 3.6,
        "fatPer100": 0.2
    },
    {
        "name": "早桃 (黄)",
        "kcalPer100": 41,
        "proteinPer100": 0.4,
        "carbsPer100": 1.1,
        "fatPer100": 10.1
    },
    {
        "name": "早釉 (标二)",
        "kcalPer100": 346,
        "proteinPer100": 9.5,
        "carbsPer100": 75.1,
        "fatPer100": 1
    },
    {
        "name": "枣(干，大)",
        "kcalPer100": 317,
        "proteinPer100": 2.1,
        "carbsPer100": 9.5,
        "fatPer100": 0.4
    },
    {
        "name": "枣(干)",
        "kcalPer100": 276,
        "proteinPer100": 3.2,
        "carbsPer100": 6.2,
        "fatPer100": 67.8
    },
    {
        "name": "枣（金丝小枣）",
        "kcalPer100": 308,
        "proteinPer100": 1.2,
        "carbsPer100": 7,
        "fatPer100": 76.7
    },
    {
        "name": "枣(鲜)",
        "kcalPer100": 125,
        "proteinPer100": 1.1,
        "carbsPer100": 1.9,
        "fatPer100": 30.5
    },
    {
        "name": "炸鸡块",
        "kcalPer100": 279,
        "proteinPer100": 20.3,
        "carbsPer100": 10.5,
        "fatPer100": 17.3,
        "aliases": [
            "肯德基"
        ]
    },
    {
        "name": "炸素虾",
        "kcalPer100": 582,
        "proteinPer100": 27.6,
        "carbsPer100": 19.3,
        "fatPer100": 44.4
    },
    {
        "name": "粘米 (优标)",
        "kcalPer100": 350,
        "proteinPer100": 8.3,
        "carbsPer100": 77.3,
        "fatPer100": 1
    },
    {
        "name": "章鱼",
        "kcalPer100": 135,
        "proteinPer100": 18.9,
        "carbsPer100": 14,
        "fatPer100": 0.4,
        "aliases": [
            "八爪鱼"
        ]
    },
    {
        "name": "章鱼（章鱼肉）",
        "kcalPer100": 52,
        "proteinPer100": 10.6,
        "carbsPer100": 1.4,
        "fatPer100": 0.4,
        "aliases": [
            "八爪鱼"
        ]
    },
    {
        "name": "长把梨",
        "kcalPer100": 62,
        "proteinPer100": 0.8,
        "carbsPer100": 14.9,
        "fatPer100": 0.8
    },
    {
        "name": "长毛对虾",
        "kcalPer100": 90,
        "proteinPer100": 18.5,
        "carbsPer100": 3,
        "fatPer100": 0.4,
        "aliases": [
            "大虾",
            "白露虾"
        ]
    },
    {
        "name": "珍珠",
        "kcalPer100": 18,
        "proteinPer100": 2,
        "carbsPer100": 2.4,
        "fatPer100": 0.1
    },
    {
        "name": "珍珠白蘑（干）",
        "kcalPer100": 258,
        "proteinPer100": 18.3,
        "carbsPer100": 56.3,
        "fatPer100": 0.7
    },
    {
        "name": "榛蘑 (水发）",
        "kcalPer100": 53,
        "proteinPer100": 2.8,
        "carbsPer100": 9.4,
        "fatPer100": 1.1
    },
    {
        "name": "榛蘑（半干）",
        "kcalPer100": 178,
        "proteinPer100": 9.5,
        "carbsPer100": 31.9,
        "fatPer100": 3.7,
        "aliases": [
            "假蜜环菌"
        ]
    },
    {
        "name": "榛蘑（干）",
        "kcalPer100": 329,
        "proteinPer100": 17.7,
        "carbsPer100": 54.6,
        "fatPer100": 10.8,
        "aliases": [
            "小蜜环菌"
        ]
    },
    {
        "name": "榛子 (炒)",
        "kcalPer100": 611,
        "proteinPer100": 30.5,
        "carbsPer100": 13.1,
        "fatPer100": 50.3
    },
    {
        "name": "榛子 (干)",
        "kcalPer100": 561,
        "proteinPer100": 20,
        "carbsPer100": 24.3,
        "fatPer100": 44.8
    },
    {
        "name": "榛子 (熟)",
        "kcalPer100": 642,
        "proteinPer100": 12.5,
        "carbsPer100": 12.9,
        "fatPer100": 57.3
    },
    {
        "name": "芝麻子 (黑)",
        "kcalPer100": 559,
        "proteinPer100": 19.1,
        "carbsPer100": 24,
        "fatPer100": 46.1
    },
    {
        "name": "芝麻子（白)",
        "kcalPer100": 536,
        "proteinPer100": 18.4,
        "carbsPer100": 31.5,
        "fatPer100": 39.6
    },
    {
        "name": "枝竹",
        "kcalPer100": 478,
        "proteinPer100": 44.4,
        "carbsPer100": 20.8,
        "fatPer100": 24.7
    },
    {
        "name": "中华猕猴桃",
        "kcalPer100": 61,
        "proteinPer100": 0.8,
        "carbsPer100": 14.5,
        "fatPer100": 0.6,
        "aliases": [
            "毛叶猕猴桃"
        ]
    },
    {
        "name": "中老年配方奶粉 (雀巢)",
        "kcalPer100": 429,
        "proteinPer100": 30,
        "carbsPer100": 44.8,
        "fatPer100": 14.4
    },
    {
        "name": "中老年配方奶粉（三元爱 益中老年配方奶粉)",
        "kcalPer100": 448,
        "proteinPer100": 20,
        "carbsPer100": 63,
        "fatPer100": 13
    },
    {
        "name": "中老年配方奶粉(森永牌)",
        "kcalPer100": 418,
        "proteinPer100": 22,
        "carbsPer100": 60,
        "fatPer100": 10
    },
    {
        "name": "猪大肠",
        "kcalPer100": 196,
        "proteinPer100": 6.9,
        "carbsPer100": 0,
        "fatPer100": 18.7
    },
    {
        "name": "猪大排",
        "kcalPer100": 264,
        "proteinPer100": 18.3,
        "carbsPer100": 1.7,
        "fatPer100": 20.4
    },
    {
        "name": "猪肚",
        "kcalPer100": 110,
        "proteinPer100": 15.2,
        "carbsPer100": 0.7,
        "fatPer100": 5.1
    },
    {
        "name": "猪耳",
        "kcalPer100": 176,
        "proteinPer100": 19.1,
        "carbsPer100": 0,
        "fatPer100": 11.1
    },
    {
        "name": "猪肥肉（肥，fat 89g)",
        "kcalPer100": 807,
        "proteinPer100": 2.4,
        "carbsPer100": 0,
        "fatPer100": 88.6
    },
    {
        "name": "猪肺",
        "kcalPer100": 84,
        "proteinPer100": 12.2,
        "carbsPer100": 0.1,
        "fatPer100": 3.9
    },
    {
        "name": "猪肝",
        "kcalPer100": 126,
        "proteinPer100": 19.2,
        "carbsPer100": 1.8,
        "fatPer100": 4.7
    },
    {
        "name": "猪肝 （卤煮)",
        "kcalPer100": 203,
        "proteinPer100": 26.4,
        "carbsPer100": 5.6,
        "fatPer100": 8.3
    },
    {
        "name": "猪里脊 (熏烤小里脊)",
        "kcalPer100": 153,
        "proteinPer100": 17.7,
        "carbsPer100": 11.8,
        "fatPer100": 3.9
    },
    {
        "name": "猪脑",
        "kcalPer100": 131,
        "proteinPer100": 10.8,
        "carbsPer100": 0,
        "fatPer100": 9.8
    },
    {
        "name": "猪皮",
        "kcalPer100": 363,
        "proteinPer100": 27.4,
        "carbsPer100": 0,
        "fatPer100": 28.1
    },
    {
        "name": "猪脾",
        "kcalPer100": 94,
        "proteinPer100": 13.2,
        "carbsPer100": 3.1,
        "fatPer100": 3.2
    },
    {
        "name": "猪肉 (后臀尖，良杂猪)",
        "kcalPer100": 175,
        "proteinPer100": 20,
        "carbsPer100": 0,
        "fatPer100": 10.5
    },
    {
        "name": "猪肉 (后臀尖)",
        "kcalPer100": 336,
        "proteinPer100": 14.6,
        "carbsPer100": 0,
        "fatPer100": 30.8
    },
    {
        "name": "猪肉 (后肘)",
        "kcalPer100": 320,
        "proteinPer100": 17,
        "carbsPer100": 0,
        "fatPer100": 28
    },
    {
        "name": "猪肉 (肋条肉)",
        "kcalPer100": 568,
        "proteinPer100": 9.3,
        "carbsPer100": 0,
        "fatPer100": 59
    },
    {
        "name": "猪肉 (里脊)",
        "kcalPer100": 150,
        "proteinPer100": 19.6,
        "carbsPer100": 0,
        "fatPer100": 7.9
    },
    {
        "name": "猪肉 (前臀尖，良杂猪)",
        "kcalPer100": 334,
        "proteinPer100": 14.2,
        "carbsPer100": 0.9,
        "fatPer100": 30.4
    },
    {
        "name": "猪肉 (前肘)",
        "kcalPer100": 287,
        "proteinPer100": 17.3,
        "carbsPer100": 2.9,
        "fatPer100": 22.9
    },
    {
        "name": "猪肉 (清蒸)",
        "kcalPer100": 198,
        "proteinPer100": 18.4,
        "carbsPer100": 0,
        "fatPer100": 13.8
    },
    {
        "name": "猪肉 (瘦)",
        "kcalPer100": 143,
        "proteinPer100": 20.3,
        "carbsPer100": 1.5,
        "fatPer100": 6.2
    },
    {
        "name": "猪肉 (通脊，杜长大猪)",
        "kcalPer100": 159,
        "proteinPer100": 22.3,
        "carbsPer100": 0,
        "fatPer100": 7.8
    },
    {
        "name": "猪肉 (通脊，良杂猪)",
        "kcalPer100": 140,
        "proteinPer100": 20.7,
        "carbsPer100": 0,
        "fatPer100": 6.4
    },
    {
        "name": "猪肉 (硬肋，杜长大猪)",
        "kcalPer100": 557,
        "proteinPer100": 10.8,
        "carbsPer100": 0,
        "fatPer100": 57.1
    },
    {
        "name": "猪肉 (硬肋，良杂猪)",
        "kcalPer100": 536,
        "proteinPer100": 11.6,
        "carbsPer100": 0,
        "fatPer100": 54.4
    },
    {
        "name": "猪肉 (猪脖)",
        "kcalPer100": 577,
        "proteinPer100": 8,
        "carbsPer100": 0,
        "fatPer100": 60.5
    },
    {
        "name": "猪肉（代表值，fat30g)",
        "kcalPer100": 331,
        "proteinPer100": 15.1,
        "carbsPer100": 0,
        "fatPer100": 30.1,
        "aliases": [
            "猪肉"
        ]
    },
    {
        "name": "猪肉(后臀尖，杜长大猪)",
        "kcalPer100": 165,
        "proteinPer100": 20.8,
        "carbsPer100": 0,
        "fatPer100": 9.1
    },
    {
        "name": "猪肉（奶面）",
        "kcalPer100": 339,
        "proteinPer100": 13.6,
        "carbsPer100": 2.2,
        "fatPer100": 30.6,
        "aliases": [
            "硬五花"
        ]
    },
    {
        "name": "猪肉(奶脯)软五花、猪夹心]",
        "kcalPer100": 349,
        "proteinPer100": 7.7,
        "carbsPer100": 0,
        "fatPer100": 35.3
    },
    {
        "name": "猪肉（前臀尖，杜长大猪）",
        "kcalPer100": 289,
        "proteinPer100": 15.3,
        "carbsPer100": 0,
        "fatPer100": 25.3
    },
    {
        "name": "猪肉(瘦，fat g)",
        "kcalPer100": 153,
        "proteinPer100": 20.7,
        "carbsPer100": 0,
        "fatPer100": 7.8
    },
    {
        "name": "猪肉(腿）",
        "kcalPer100": 190,
        "proteinPer100": 17.9,
        "carbsPer100": 0.8,
        "fatPer100": 12.8
    },
    {
        "name": "猪肉（fat 12g)",
        "kcalPer100": 181,
        "proteinPer100": 19,
        "carbsPer100": 0.2,
        "fatPer100": 11.7
    },
    {
        "name": "猪肉罐头 (香糟块肉)",
        "kcalPer100": 542,
        "proteinPer100": 15.5,
        "carbsPer100": 0,
        "fatPer100": 53.3
    },
    {
        "name": "猪肉罐头(珍珠里脊丝,罐头)",
        "kcalPer100": 225,
        "proteinPer100": 6.7,
        "carbsPer100": 10.5,
        "fatPer100": 17.3
    },
    {
        "name": "猪肉脯",
        "kcalPer100": 378,
        "proteinPer100": 28,
        "carbsPer100": 46.6,
        "fatPer100": 8.8
    },
    {
        "name": "猪舌",
        "kcalPer100": 184,
        "proteinPer100": 18.1,
        "carbsPer100": 0,
        "fatPer100": 12.4,
        "aliases": [
            "口条"
        ]
    },
    {
        "name": "猪肾（fat 8g）",
        "kcalPer100": 137,
        "proteinPer100": 16,
        "carbsPer100": 0,
        "fatPer100": 8.1,
        "aliases": [
            "猪腰子"
        ]
    },
    {
        "name": "猪肾（fat2g）",
        "kcalPer100": 82,
        "proteinPer100": 15.8,
        "carbsPer100": 0.6,
        "fatPer100": 1.8,
        "aliases": [
            "猪腰子"
        ]
    },
    {
        "name": "猪蹄",
        "kcalPer100": 260,
        "proteinPer100": 22.6,
        "carbsPer100": 0,
        "fatPer100": 18.8
    },
    {
        "name": "猪蹄 (熟)",
        "kcalPer100": 260,
        "proteinPer100": 23.6,
        "carbsPer100": 3.2,
        "fatPer100": 17
    },
    {
        "name": "猪蹄筋",
        "kcalPer100": 156,
        "proteinPer100": 35.3,
        "carbsPer100": 0.5,
        "fatPer100": 1.4
    },
    {
        "name": "猪头皮",
        "kcalPer100": 499,
        "proteinPer100": 11.8,
        "carbsPer100": 12.7,
        "fatPer100": 44.6
    },
    {
        "name": "猪腿肉 (藏香猪)",
        "kcalPer100": 268,
        "proteinPer100": 17.5,
        "carbsPer100": 6.3,
        "fatPer100": 19.2
    },
    {
        "name": "猪小肠",
        "kcalPer100": 65,
        "proteinPer100": 10,
        "carbsPer100": 1.7,
        "fatPer100": 2
    },
    {
        "name": "猪小排 (杜长大猪)",
        "kcalPer100": 295,
        "proteinPer100": 16.8,
        "carbsPer100": 0,
        "fatPer100": 25.3
    },
    {
        "name": "猪小排 (良杂猪)",
        "kcalPer100": 351,
        "proteinPer100": 14.1,
        "carbsPer100": 0,
        "fatPer100": 32.7
    },
    {
        "name": "猪心",
        "kcalPer100": 119,
        "proteinPer100": 16.6,
        "carbsPer100": 1.1,
        "fatPer100": 5.3
    },
    {
        "name": "猪血",
        "kcalPer100": 55,
        "proteinPer100": 12.2,
        "carbsPer100": 0.9,
        "fatPer100": 0.3
    },
    {
        "name": "猪肘棒",
        "kcalPer100": 248,
        "proteinPer100": 16.5,
        "carbsPer100": 9.4,
        "fatPer100": 16
    },
    {
        "name": "猪肘棒 (熟)",
        "kcalPer100": 314,
        "proteinPer100": 21.3,
        "carbsPer100": 2.1,
        "fatPer100": 24.5
    },
    {
        "name": "竹荪（干）",
        "kcalPer100": 248,
        "proteinPer100": 17.8,
        "carbsPer100": 60.3,
        "fatPer100": 3.1,
        "aliases": [
            "竹笙",
            "竹参"
        ]
    },
    {
        "name": "竹笋(鲜）",
        "kcalPer100": 23,
        "proteinPer100": 2.6,
        "carbsPer100": 3.6,
        "fatPer100": 0.2
    },
    {
        "name": "祝光苹果",
        "kcalPer100": 50,
        "proteinPer100": 0.4,
        "carbsPer100": 12.5,
        "fatPer100": 0.1
    },
    {
        "name": "子瓜",
        "kcalPer100": 5,
        "proteinPer100": 0.2,
        "carbsPer100": 0.6,
        "fatPer100": 0.3
    },
    {
        "name": "紫菜 (干)",
        "kcalPer100": 250,
        "proteinPer100": 26.7,
        "carbsPer100": 44.1,
        "fatPer100": 1.1
    },
    {
        "name": "紫菜头",
        "kcalPer100": 42,
        "proteinPer100": 1.8,
        "carbsPer100": 10.6,
        "fatPer100": 0.2
    },
    {
        "name": "紫红糯米",
        "kcalPer100": 346,
        "proteinPer100": 8.3,
        "carbsPer100": 75.1,
        "fatPer100": 1.7,
        "aliases": [
            "血糯米"
        ]
    },
    {
        "name": "紫葡萄",
        "kcalPer100": 45,
        "proteinPer100": 0.7,
        "carbsPer100": 10.3,
        "fatPer100": 0.3
    },
    {
        "name": "紫青低纹 (冰鲜)",
        "kcalPer100": 150,
        "proteinPer100": 20.5,
        "carbsPer100": 0.8,
        "fatPer100": 7.2
    },
    {
        "name": "紫酥梨",
        "kcalPer100": 51,
        "proteinPer100": 0.3,
        "carbsPer100": 2,
        "fatPer100": 0.1
    },
    {
        "name": "鳟鱼",
        "kcalPer100": 99,
        "proteinPer100": 18.6,
        "carbsPer100": 0.2,
        "fatPer100": 2.6,
        "aliases": [
            "红鲜鱼"
        ]
    }
]

/** 首次启动时初始化食材库（已初始化则跳过） */
export async function seedFoodReferences(): Promise<void> {
    const count = await db.foodReferences.count()
    if (count > 0) return
    await db.foodReferences.bulkPut(SEED_DATA)
    console.log('✅ 食材库初始化完成：', SEED_DATA.length, '种')
}
