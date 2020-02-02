// lesson1 クラスの定義
// class User {

// }


// lesson4 静的型付け
console.log("\nlesson3 静的型付け")
// 型
// number
// string
// bloolean
// any
// array
// などがある

let i: number; // constを使う際は必ず初期化する必要がある。↓参考
const j: number = 10;
let k = 10; // k: number 暗黙の型定義

let x; // let x: any
x = 10;
console.log(x) // 10
x = "hello"
console.log(x) // hello

let result30 :number[];
result30 = [10, 5, 3]


// lesson5 列挙型
console.log("\nlesson4 列挙型")
// 関連する値の集合を編成する方法。TypeScript列挙型は数値ベース。数値を列挙型のインスタンスに割り当てることができる。
// ex Signal型を作ってみる
enum Signal {
    Red = 0,
    Blue = 1,
    Yello = 2
}
// ex,
// let result40: Signal;
// if (result40 === Signal.Yello) { ... } のような感じで使う。
console.log(Signal[2]); // Yellow 
// 添字は省略及び連番の最初を指定できる
// enum Signal {
//     Red,　// 0
//     Blue = 3,
//     Yello // 4
// }
enum Signal { // 同じ変数名で複数のenumを定義できる。　*最初のメンバを省略できるのはどちらかだけ。なのでここではgreenに4を設定する
    Green = 4
} 
console.log(Signal.Green); // 4 
console.log({Signal})


// lesson6 関数
console.log("\nlesson6 関数")
function mult (a: number, b: number):number {
    return a * b;
}
console.log(mult(3, 5)) // 15

// 必須でない引数は引数の後に?をつける。　必須の引数は必須でない物より前に定義する。
// 返り値がない場合は型をvoidにする。
function add (a: number, b?: number):void { 
    console.log('func add: ',a)
}
add(1000)

// 引数には初期値を設定することができる
function subtract (a: number, b: number = 10):number { 
    return a - b;
}
console.log("subtract(100):", subtract(100)) // 90
console.log("subtract(10, 1):", subtract(10, 1)) // 9


// lesson7 関数式
console.log("\nlesson7 関数式")
// アロー関数で式を描く ↓２つは同じ。一行の場合はreturnも省略可能
const add70 = (a: number, b: number):number => { 
    return a + b;
}
const add71 = (a: number, b: number):number =>  a + b;
console.log("add70(1, 2): ",add70(1, 2)) // 3
console.log("add71(2, 2): ",add71(2, 2)) // 4


// lesson8 関数のオーバーロード
console.log("\nlesson8 関数のオーバーロード")
// tsでは引数や戻り値が異なる、同じ名前の関数を宣言することが可能。
function add80 (a: number, b: number):number; // メソッド名、引数の型、引数の数、返り値のことを関数のシグネチャとよぶ
function add80 (a: string, b: string):string;
function add80 (a: any, b: any) {
    if(typeof a ==='string' && typeof b ==='string') return a + " " + b;
    return a + b;
}
// 宣言されているシグネチャ以外の組み合わせで実行するとコンパイルエラーになる
console.log("add80('hello', 'world'): ", add80('hello', 'world'))
console.log("add80(1, 2): ", add80(1, 2))
// console.log("add80(1, '2'): ", add80(1, "2"))  // コンパイルエラー


// lesson9 クラス 基本
console.log("\nlesson9 クラス 基本")
// クラスがインスタンス化される時、必ずconstractorが呼ばれる
// class内のメソッドや変数にはアクセス修飾子をつけることができる。(デフォルトはpublic) public, protected, private
class User90 {
    // 下の書き方を省略して一行にできる
    // name: string;
    // constructor(name: string = 'まりこ'){
    //     this.name = name;
    // }
    constructor(public name: string = 'まりこ') {
    } 
    sayHi(): void {
        console.log("hi! i am " + this.name);
    }
}
const tom = new User90('Tom');
console.log("tom.name: ", tom.name);
tom.sayHi();
const mariko = new User90();
console.log("mariko.name: ", mariko.name);

// lesson10 クラス 応用(private)
console.log("\nlesson10 クラス 応用(private)")
// private でも全くアクセスできなくするのではなくて、値の設定だけできるようにしたいだとか、値の取得だけできるようにしたい時
// → getter setterを使う
class User100 {
    // 変数をPrivateにする　↓アクセス修飾子をprivateにすればOK
    // protected _nickName: string;
    constructor(private _name: string = 'まりこ', protected _nickName: string ='マリー') {
    } 
    sayHi(): void {
        console.log("hi! i am " + this._name);
    }
    // getter setterの記述
    get name() {
        return this._name;
    }
    set name(newName: string) {
        this._name = newName;
    }
}
const tomy = new User100('Tomy');
// console.log("tom.name: ", tomy._name); //privateなのでコンパイルエラーになる
console.log("tomy.name: ", tomy.name); // Tomy
tomy.name = "TOMY"
console.log("tomy.name: ", tomy.name); // TOMY

// lesson11 クラス 応用(クラスの継承とprotected)
console.log("\nlesson11 クラス 応用(クラスの継承とprotected)")
// 継承とは→User クラスの変数やメソッドを保持しつつ、新しいクラスを作る
// lesson9で作ったUser100を継承する
class AdminUser extends User100 {
    private _age: number;
    constructor(_name: string, _age: number) {
        super(_name);
        // ↓これをやってしまうとUser100の_nameにthis._nickName(User100の_nickNam：マリー)が代入されてしまう。
        // super(this._nickName);
        this._age = _age
    }
    // メソッドもオーバーライドできる
    sayHi(): void {
        console.log("my age: " + this._age);
        // protectedで定義した変数は自分のクラスor継承したクラスから呼び出せる。
        console.log("my nickname: " + this._nickName);
        super.sayHi(); // console.log("hi! i am " + this._name);が実行される
    }
}
const bob = new AdminUser("Bob", 28);
bob.sayHi(); 


// lesson12 クラス 応用(静的メンバ)
console.log("\nlesson12 クラス 応用(静的メンバ)")
// インスタンスではなく、クラス自体に紐付いたメンバを作ることもできて、それらを静的メンバと呼ぶ。
// ex, 幾つインスタンスが生成されたか数えたい時など→インスタンスでは持てない情報なのでクラス自体に静的メンバとして保持する。
// 静的メンバの宣言→　static というキーワードを使う
class User120 {
    static count: number = 0;
    constructor(name: string) {
        // 静的メンバへのアクセスにはクラス名をつける。
        User120.count++;
    }
    static showDescription(): void {
        console.log("this class is about user \n this is training of 静的メンバ")
    }
}
const tom12 = new User120('tom12');
const bob12 = new User120('bob12');
console.log("User120.count: ", User120.count);
User120.showDescription();


// lesson13 インターフェイス（変数の型付け）
console.log("\nlesson13 インターフェイス（変数の型付け）")
// 変数の型付けについて使う方法
// tsでは構造的部分型（ざっくり言うとある型のプロパティを持ってさえいればその型であるとみなす、という方法）を採用している。
// この形式でも良いが、引数がたくさんある場合困る。
function getTotal1(result: {a:number, b:number}) {
  return result.a + result.b;  
}
const inputResult130 = {
    a: 10,
    b: 20,
    // 構造的部分型により、cという変数を持っていてもResult130の型とみなす。
    // ただし、result型として使う際はcは使えない。result.cとかはできない。
    c: 'hello'
}
console.log("getTotal1(inputResult130): ", getTotal1(inputResult130))
interface Result130 {
    a: number;
    b: number;
}
function getTotal2(result: Result130) {
    // console.log(result.c) // これはできない。
    return result.a + result.b;  
}
console.log("getTotal2(inputResult130): ", getTotal2(inputResult130))


// lesson14 インターフェイス（継承して使う方法）
console.log("\nlesson14 インターフェイス（継承して使う方法）")
// 継承して使う方法
interface SpringResult { 
    a: number;
}
// プロパティがオプションだった場合は変数の後ろに?をつける。
interface FallResult { 
    b?: number;
}
interface FinalResult extends SpringResult, FallResult {
    final: number;
}
function getTotal140(result: FinalResult) {
    if (result.b) return result.a + result.b + result.final
    return result.a + result.final
}
const result140 = {
    a: 10,
    b: 30,
    final: 50
}
console.log("getTotal140(result140)", getTotal140(result140))


// lesson15 インターフェイスとクラスの組み合わせ
console.log("\nlesson15 インターフェイスとクラスの組み合わせ")
//インターフェイスはクラスと組み合わせると「インターフェイスの中のプロパティを必ずクラスのほうで実装してください」という意味になる
interface GameUser {
    score: number;
    // メソッドに関してはシグネチャ(メソッド名、引数の型、引数の数)を書いてあげれば OK 
    showScore(): void;
}
// implements GameUserすることでUser150は必ずscoreとshowScoreを持つ必要が出てくる。
// →大規模開発では特に重要になる。
// implementsの後には複数interfaceをカンマ区切りでつなげることが出来る
class User150 implements GameUser {
    score: number = 0;
    // 明示的にpublic を付けないとsayHiのなかで使えないらしい。
    constructor(public name: string) {
    }
    sayHi() :void {
        console.log("hi i am " + this.name)
    }
    showScore(): void {
        console.log("score: " + this.score)
    }
}


// lesson16 ジェネリクス
console.log("\nlesson15 ジェネリクス")
// 同じ関数を使いたいが、引数や返り値の型が違う場合に型を指定するため使う。
// 以下のような処理を定義したい時、関数を幾つも定義するのを防ぐため使う。
// function getStringArray(val: string): string[] {
//     return [val, val, val]
// }
// function getNumberArray(val: number): number[] {
//     return [val, val, val]
// }
// Tはなんでも良いが、慣習的にTypeのTを使う。
function getArray<T>(val: T): T[]{
    return [val, val, val]
}
console.log("getArray<string>('hello'): ",getArray<string>("hello"))
console.log("getArray<number>(3): ",getArray<number>(3))


// lesson16 ジェネリクス 応用（インターフェイスやクラスで使う）
console.log("\nlesson16 ジェネリクス 応用（インターフェイスやクラスで使う）")
// Genericsは、型を指定するところだったら関数だけではなくてインターフェースやクラスでも使える
class MyData_1<T> {
    constructor(public val:T) {}
    getArray(): T[] {
        return [this.val, this.val, this.val]
    }
}
const lesson16_1 = new MyData_1<string>('Hello')
const lesson16_2 = new MyData_1<number>(5)
console.log("lesson16_1.getArray(): ", lesson16_1.getArray())
console.log("lesson16_2.getArray()", lesson16_2.getArray())

// 制約（ここに来る型はなんでもいいけど、このプロパティを持つ型だけにしてね）をつけることもできる　→ interfaceでプロパティ指定
interface Result160 {
    a: number;
    b: number;
}
// class MyData_2<T> { 
    // → class MyData_2<T extend 型> { にする
class MyData_2<T extends Result160> {
    constructor(public val:T) {}
    getArray(): T[] {
        return [this.val, this.val, this.val]
    }
}
const lesson16_3 = new MyData_2<Result160>({a:16, b:20}) // 引数にResult160のプロパティを渡さないとコンパイルエラーになる。
console.log("lesson16_3.getArray()", lesson16_3.getArray())
// 構造的部分型より、a,b以外のプロパティを持っている引数を渡してもちゃんと動く
interface Result161 extends Result160 {
    c: string;
}
const lesson16_4 = new MyData_2<Result161>({a:15, b:10, c:'hello'})
console.log("lesson16_4.getArray(): ", lesson16_4.getArray())


// lesson18 内部モジュール 
console.log("\nlesson18 内部モジュール")
// 大規模開発で有効な方法。コードを部品化してわかりやすく整理したり、変数名とかクラス名の衝突を避けたりできる。
module UserModule1 {
    // exportを付けて外部に公開しないと UserModule.name で波線が出るので注意
    export const name = "yamamoto";
    export module AddressModule1 {
       export const zip = "111-1111"
    }
}
console.log("UserModule1.name: ",UserModule1.name);
console.log("UserModule1.AddressModule.zip: ", UserModule1.AddressModule1.zip);
// ↑長いモジュール名が困るので短くすることが出来る
// inport を使う
import addr = UserModule1.AddressModule1;
console.log("addr.zip: ", addr.zip)

// ☆Error1　begin
// モジュールを外出しして読み込む際は /// 付けて↓のようにかけばOK
// /// <reference path="user.ts" />
// ☆Error1　end
import { UserModule2 } from "./user";
console.log("UserModule2.name: ", UserModule2.name)


// lesson19 外部モジュール 
console.log("\nlesson19 外部モジュール")
// 外部モジュールは、主に NodeJS だとか RequireJS というライブラリを使ったプロジェクトにおいて使われる
// 外部モジュールは内部モジュールと違って、1 ファイルに 1 モジュール入れることになるので、module の外枠は不要。
// export module AddressModule1 { ←不要
    // export const zip = "111-1111"　←これだけ書く。
//  }　←不要
// ↑この中身をそのまま別ファイルにすれば良いが、
// 今回は Node でよく使われる CommonJS形式でのコンパイルと、 →　user_common.ts
// RequireJSなどで使われる AMD と呼ばれるコンパイル方式を 2 つ使っていきたいので、2 つファイルを作成する →　user_amd.ts

// 呼び出しは下のように書く
// commonjs形式 コマンドが必要なので一旦下２行コメントアウト
// import User190 = require("./user_commonjs")
// console.log("User190.name: ", User190.name)
// commonjs形式のコンパイルは以下のコマンド
// $tsc -t es5 main.ts -m commonjs

// amd形式
// import User191 = require("./user_amd")
// console.log("User191.name: ",User191.name)
// amd形式のコンパイルは以下のコマンド
// $tsc -t es5 main.ts -m amd
// 実行時エラーになるが、require("amd-loader");を付ければOKのようである。