"use strict";

const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

// --- データ構造 ---
let premier = [
    { id: 1, code: "ARS", name: "アーセナル", city: "ロンドン", capacity: 60704, rank: 1 },
    { id: 2, code: "AVL", name: "アストン・ヴィラ", city: "バーミンガム", capacity: 42657, rank: 3 },
    { id: 3, code: "BOU", name: "ボーンマス", city: "ボーンマス", capacity: 11307, rank: 15 },
    { id: 4, code: "BRE", name: "ブレントフォード", city: "ロンドン", capacity: 17250, rank: 12 },
    { id: 5, code: "BUR", name: "バーンリー", city: "バーンリー", capacity: 21944, rank: 19 },
    { id: 6, code: "BHA", name: "ブライトン", city: "ブライトン", capacity: 31876, rank: 9 },
    { id: 7, code: "CHE", name: "チェルシー", city: "ロンドン", capacity: 40343, rank: 4 },
    { id: 8, code: "CRY", name: "クリスタル・パレス", city: "ロンドン", capacity: 25486, rank: 8 },
    { id: 9, code: "EVE", name: "エヴァートン", city: "リヴァプール", capacity: 39572, rank: 10 },
    { id: 10, code: "FUL", name: "フラム", city: "ロンドン", capacity: 25700, rank: 13 },
    { id: 11, code: "LEE", name: "リーズユナイテッド", city: "リーズ", capacity: 37654, rank: 16 },
    { id: 12, code: "LIV", name: "リヴァプール", city: "リヴァプール", capacity: 61276, rank: 6 },
    { id: 13, code: "MCI", name: "マンチェスター・C", city: "マンチェスター", capacity: 53400, rank: 2 },
    { id: 14, code: "MUN", name: "マンチェスター・U", city: "マンチェスター", capacity: 74310, rank: 5 },
    { id: 15, code: "NEW", name: "ニューカッスル", city: "ニューカッスル", capacity: 52305, rank: 11 },
    { id: 16, code: "NFO", name: "ノッティンガム・フォレスト", city: "ノッティンガム", capacity: 30445, rank: 17 },
    { id: 17, code: "SUN", name: "サンダーランド", city: "サンダーランド", capacity: 48707, rank: 7 },
    { id: 18, code: "TOT", name: "トッテナム", city: "ロンドン", capacity: 62850, rank: 14 },
    { id: 19, code: "WHU", name: "ウェストハム", city: "ロンドン", capacity: 62500, rank: 18 },
    { id: 20, code: "WOL", name: "ウォルヴァーハンプトン", city: "ウォルヴァーハンプトン", capacity: 31750, rank: 20 }
];

let nagano = [
    { id: 1, code: "20201", name: "長野市", area: "北信", population: 367000, distance: 0 },
    { id: 2, code: "20202", name: "松本市", area: "中信", population: 239000, distance: 75 },
    { id: 3, code: "20203", name: "上田市", area: "東信", population: 153000, distance: 40 },
    { id: 4, code: "20204", name: "岡谷市", area: "南信", population: 47000, distance: 100 },
    { id: 5, code: "20205", name: "飯田市", area: "南信", population: 98000, distance: 160 },
    { id: 6, code: "20209", name: "伊那市", area: "南信", population: 66000, distance: 125 },
    { id: 7, code: "20210", name: "駒ヶ根市", area: "南信", population: 32000, distance: 140 },
    { id: 8, code: "20211", name: "中野市", area: "北信", population: 42000, distance: 25 },
    { id: 9, code: "20212", name: "大町市", area: "中信", population: 26000, distance: 40 },
    { id: 10, code: "20213", name: "飯山市", area: "北信", population: 19000, distance: 35 },
    { id: 11, code: "20218", name: "千曲市", area: "北信", population: 57000, distance: 15 }
];

let laliga = [
    { id: 1, code: "ATH", name: "アスレティック・ビルバオ", city: "ビルバオ", capacity: 53289, rank: 8 },
    { id: 2, code: "ATM", name: "アトレティコ・マドリード", city: "マドリード", capacity: 70460, rank: 4 },
    { id: 3, code: "OSA", name: "オサスナ", city: "パンプローナ", capacity: 23576, rank: 20 },
    { id: 4, code: "OVI", name: "レアル・オビエド", city: "オビエド", capacity: 30500, rank: 19 },
    { id: 5, code: "ALA", name: "アラベス", city: "ビトリア", capacity: 19840, rank: 13 },
    { id: 6, code: "FCB", name: "バルセロナ", city: "バルセロナ", capacity: 45968, rank: 1 },
    { id: 7, code: "GET", name: "ヘタフェ", city: "ヘタフェ", capacity: 16500, rank: 7 },
    { id: 8, code: "GIR", name: "ジローナ", city: "ジローナ", capacity: 14624, rank: 17 },
    { id: 9, code: "RAY", name: "ラージョ・バジェカーノ", city: "マドリード", capacity: 14708, rank: 15 },
    { id: 10, code: "RMA", name: "レアル・マドリード", city: "マドリード", capacity: 81044, rank: 2 },
    { id: 11, code: "RSO", name: "レアル・ソシエダ", city: "サン・セバスティアン", capacity: 39500, rank: 10 },
    { id: 12, code: "VIL", name: "ビジャレアル", city: "ビジャレアル", capacity: 23000, rank: 3 },
    { id: 13, code: "BET", name: "レアル・ベティス", city: "セビージャ", capacity: 60721, rank: 5 },
    { id: 14, code: "SEV", name: "セビージャ", city: "セビージャ", capacity: 43883, rank: 9 },
    { id: 15, code: "ELC", name: "エルチェ", city: "エルチェ", capacity: 31388, rank: 12 },
    { id: 16, code: "MAL", name: "マジョルカ", city: "パルマ", capacity: 23142, rank: 14 },
    { id: 17, code: "VAL", name: "バレンシア", city: "バレンシア", capacity: 49430, rank: 16 },
    { id: 18, code: "CEL", name: "セルタ", city: "ビーゴ", capacity: 24791, rank: 11 },
    { id: 19, code: "LEV", name: "レバンテ", city: "バレンシア", capacity: 26354, rank: 18 },
    { id: 20, code: "ESP", name: "エスパニョール", city: "バルセロナ", capacity: 40000, rank: 6 }
];

// --- 共通ルーティング関数 (コードの重複を避けるため) ---
function setupCRUD(resourceName, dataArray, viewPrefix) {
    // 一覧 
    app.get(`/${resourceName}`, (req, res) => {
        res.render(`${viewPrefix}_list`, { data: dataArray });
    });

    // 新規登録画面 [cite: 2]
    app.get(`/${resourceName}/create`, (req, res) => {
        res.redirect(`/public/${viewPrefix}_new.html`);
    });

    // 詳細 
    app.get(`/${resourceName}/:number`, (req, res) => {
        const number = req.params.number;
        res.render(`${viewPrefix}_detail`, { id: number, data: dataArray[number] });
    });

    // 削除処理 (詳細から遷移) [cite: 2]
    app.get(`/${resourceName}/delete/:number`, (req, res) => {
        dataArray.splice(req.params.number, 1);
        res.redirect(`/${resourceName}`);
    });

    // 新規登録処理 [cite: 2]
    app.post(`/${resourceName}`, (req, res) => {
        const id = dataArray.length + 1;
        const newItem = { id: id, ...req.body };
        dataArray.push(newItem);
        res.redirect(`/${resourceName}`);
    });

    // 編集画面 [cite: 2]
    app.get(`/${resourceName}/edit/:number`, (req, res) => {
        const number = req.params.number;
        res.render(`${viewPrefix}_edit`, { id: number, data: dataArray[number] });
    });

    // 更新処理 [cite: 2]
    app.post(`/${resourceName}/update/:number`, (req, res) => {
        const n = req.params.number;
        Object.assign(dataArray[n], req.body);
        res.redirect(`/${resourceName}`);
    });
}

// 各システムの設定
setupCRUD("premier", premier, "premier");
setupCRUD("nagano", nagano, "nagano");
setupCRUD("laliga", laliga, "laliga");

app.listen(8080, () => console.log("System listening on port 8080"));