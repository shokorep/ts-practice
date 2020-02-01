var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("user", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UserModule2;
    (function (UserModule2) {
        UserModule2.name = "suzuki";
        var AddressModule2;
        (function (AddressModule2) {
            AddressModule2.zip = "222-2222";
        })(AddressModule2 = UserModule2.AddressModule2 || (UserModule2.AddressModule2 = {}));
    })(UserModule2 = exports.UserModule2 || (exports.UserModule2 = {}));
});
// lesson1 クラスの定義
// class User {
define("main", ["require", "exports", "user"], function (require, exports, usermodule2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // }
    // lesson4 静的型付け
    console.log("\nlesson3 静的型付け");
    // 型
    // number
    // string
    // bloolean
    // any
    // array
    // などがある
    var i; // constを使う際は必ず初期化する必要がある。↓参考
    var j = 10;
    var k = 10; // k: number 暗黙の型定義
    var x; // let x: any
    x = 10;
    console.log(x); // 10
    x = "hello";
    console.log(x); // hello
    var result30;
    result30 = [10, 5, 3];
    // lesson5 列挙型
    console.log("\nlesson4 列挙型");
    // 関連する値の集合を編成する方法。TypeScript列挙型は数値ベース。数値を列挙型のインスタンスに割り当てることができる。
    // ex Signal型を作ってみる
    var Signal;
    (function (Signal) {
        Signal[Signal["Red"] = 0] = "Red";
        Signal[Signal["Blue"] = 1] = "Blue";
        Signal[Signal["Yello"] = 2] = "Yello";
    })(Signal || (Signal = {}));
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
    (function (Signal) {
        Signal[Signal["Green"] = 4] = "Green";
    })(Signal || (Signal = {}));
    console.log(Signal.Green); // 4 
    console.log({ Signal: Signal });
    // lesson6 関数
    console.log("\nlesson6 関数");
    function mult(a, b) {
        return a * b;
    }
    console.log(mult(3, 5)); // 15
    // 必須でない引数は引数の後に?をつける。　必須の引数は必須でない物より前に定義する。
    // 返り値がない場合は型をvoidにする。
    function add(a, b) {
        console.log('func add: ', a);
    }
    add(1000);
    // 引数には初期値を設定することができる
    function subtract(a, b) {
        if (b === void 0) { b = 10; }
        return a - b;
    }
    console.log("subtract(100):", subtract(100)); // 90
    console.log("subtract(10, 1):", subtract(10, 1)); // 9
    // lesson7 関数式
    console.log("\nlesson7 関数式");
    // アロー関数で式を描く ↓２つは同じ。一行の場合はreturnも省略可能
    var add70 = function (a, b) {
        return a + b;
    };
    var add71 = function (a, b) { return a + b; };
    console.log("add70(1, 2): ", add70(1, 2)); // 3
    console.log("add71(2, 2): ", add71(2, 2)); // 4
    // lesson8 関数のオーバーロード
    console.log("\nlesson8 関数のオーバーロード");
    function add80(a, b) {
        if (typeof a === 'string' && typeof b === 'string')
            return a + " " + b;
        return a + b;
    }
    // 宣言されているシグネチャ以外の組み合わせで実行するとコンパイルエラーになる
    console.log("add80('hello', 'world'): ", add80('hello', 'world'));
    console.log("add80(1, 2): ", add80(1, 2));
    // console.log("add80(1, '2'): ", add80(1, "2"))  // コンパイルエラー
    // lesson9 クラス 基本
    console.log("\nlesson9 クラス 基本");
    // クラスがインスタンス化される時、必ずconstractorが呼ばれる
    // class内のメソッドや変数にはアクセス修飾子をつけることができる。(デフォルトはpublic) public, protected, private
    var User90 = /** @class */ (function () {
        // 下の書き方を省略して一行にできる
        // name: string;
        // constructor(name: string = 'まりこ'){
        //     this.name = name;
        // }
        function User90(name) {
            if (name === void 0) { name = 'まりこ'; }
            this.name = name;
        }
        User90.prototype.sayHi = function () {
            console.log("hi! i am " + this.name);
        };
        return User90;
    }());
    var tom = new User90('Tom');
    console.log("tom.name: ", tom.name);
    tom.sayHi();
    var mariko = new User90();
    console.log("mariko.name: ", mariko.name);
    // lesson10 クラス 応用(private)
    console.log("\nlesson10 クラス 応用(private)");
    // private でも全くアクセスできなくするのではなくて、値の設定だけできるようにしたいだとか、値の取得だけできるようにしたい時
    // → getter setterを使う
    var User100 = /** @class */ (function () {
        // 変数をPrivateにする　↓アクセス修飾子をprivateにすればOK
        // protected _nickName: string;
        function User100(_name, _nickName) {
            if (_name === void 0) { _name = 'まりこ'; }
            if (_nickName === void 0) { _nickName = 'マリー'; }
            this._name = _name;
            this._nickName = _nickName;
        }
        User100.prototype.sayHi = function () {
            console.log("hi! i am " + this._name);
        };
        Object.defineProperty(User100.prototype, "name", {
            // getter setterの記述
            get: function () {
                return this._name;
            },
            set: function (newName) {
                this._name = newName;
            },
            enumerable: true,
            configurable: true
        });
        return User100;
    }());
    var tomy = new User100('Tomy');
    // console.log("tom.name: ", tomy._name); //privateなのでコンパイルエラーになる
    console.log("tomy.name: ", tomy.name); // Tomy
    tomy.name = "TOMY";
    console.log("tomy.name: ", tomy.name); // TOMY
    // lesson11 クラス 応用(クラスの継承とprotected)
    console.log("\nlesson11 クラス 応用(クラスの継承とprotected)");
    // 継承とは→User クラスの変数やメソッドを保持しつつ、新しいクラスを作る
    // lesson9で作ったUser100を継承する
    var AdminUser = /** @class */ (function (_super) {
        __extends(AdminUser, _super);
        function AdminUser(_name, _age) {
            var _this = _super.call(this, _name) || this;
            // ↓これをやってしまうとUser100の_nameにthis._nickName(User100の_nickNam：マリー)が代入されてしまう。
            // super(this._nickName);
            _this._age = _age;
            return _this;
        }
        // メソッドもオーバーライドできる
        AdminUser.prototype.sayHi = function () {
            console.log("my age: " + this._age);
            // protectedで定義した変数は自分のクラスor継承したクラスから呼び出せる。
            console.log("my nickname: " + this._nickName);
            _super.prototype.sayHi.call(this); // console.log("hi! i am " + this._name);が実行される
        };
        return AdminUser;
    }(User100));
    var bob = new AdminUser("Bob", 28);
    bob.sayHi();
    // lesson12 クラス 応用(静的メンバ)
    console.log("\nlesson12 クラス 応用(静的メンバ)");
    // インスタンスではなく、クラス自体に紐付いたメンバを作ることもできて、それらを静的メンバと呼ぶ。
    // ex, 幾つインスタンスが生成されたか数えたい時など→インスタンスでは持てない情報なのでクラス自体に静的メンバとして保持する。
    // 静的メンバの宣言→　static というキーワードを使う
    var User120 = /** @class */ (function () {
        function User120(name) {
            // 静的メンバへのアクセスにはクラス名をつける。
            User120.count++;
        }
        User120.showDescription = function () {
            console.log("this class is about user \n this is training of 静的メンバ");
        };
        User120.count = 0;
        return User120;
    }());
    var tom12 = new User120('tom12');
    var bob12 = new User120('bob12');
    console.log("User120.count: ", User120.count);
    User120.showDescription();
    // lesson13 インターフェイス（変数の型付け）
    console.log("\nlesson13 インターフェイス（変数の型付け）");
    // 変数の型付けについて使う方法
    // tsでは構造的部分型（ざっくり言うとある型のプロパティを持ってさえいればその型であるとみなす、という方法）を採用している。
    // この形式でも良いが、引数がたくさんある場合困る。
    function getTotal1(result) {
        return result.a + result.b;
    }
    var inputResult130 = {
        a: 10,
        b: 20,
        // 構造的部分型により、cという変数を持っていてもResult130の型とみなす。
        // ただし、result型として使う際はcは使えない。result.cとかはできない。
        c: 'hello'
    };
    console.log("getTotal1(inputResult130): ", getTotal1(inputResult130));
    function getTotal2(result) {
        // console.log(result.c) // これはできない。
        return result.a + result.b;
    }
    console.log("getTotal2(inputResult130): ", getTotal2(inputResult130));
    // lesson14 インターフェイス（継承して使う方法）
    console.log("\nlesson14 インターフェイス（継承して使う方法）");
    function getTotal140(result) {
        if (result.b)
            return result.a + result.b + result.final;
        return result.a + result.final;
    }
    var result140 = {
        a: 10,
        b: 30,
        final: 50
    };
    console.log("getTotal140(result140)", getTotal140(result140));
    // lesson15 インターフェイスとクラスの組み合わせ
    console.log("\nlesson15 インターフェイスとクラスの組み合わせ");
    // implements GameUserすることでUser150は必ずscoreとshowScoreを持つ必要が出てくる。
    // →大規模開発では特に重要になる。
    // implementsの後には複数interfaceをカンマ区切りでつなげることが出来る
    var User150 = /** @class */ (function () {
        // 明示的にpublic を付けないとsayHiのなかで使えないらしい。
        function User150(name) {
            this.name = name;
            this.score = 0;
        }
        User150.prototype.sayHi = function () {
            console.log("hi i am " + this.name);
        };
        User150.prototype.showScore = function () {
            console.log("score: " + this.score);
        };
        return User150;
    }());
    // lesson16 ジェネリクス
    console.log("\nlesson15 ジェネリクス");
    // 同じ関数を使いたいが、引数や返り値の型が違う場合に型を指定するため使う。
    // 以下のような処理を定義したい時、関数を幾つも定義するのを防ぐため使う。
    // function getStringArray(val: string): string[] {
    //     return [val, val, val]
    // }
    // function getNumberArray(val: number): number[] {
    //     return [val, val, val]
    // }
    // Tはなんでも良いが、慣習的にTypeのTを使う。
    function getArray(val) {
        return [val, val, val];
    }
    console.log("getArray<string>('hello'): ", getArray("hello"));
    console.log("getArray<number>(3): ", getArray(3));
    // lesson16 ジェネリクス 応用（インターフェイスやクラスで使う）
    console.log("\nlesson16 ジェネリクス 応用（インターフェイスやクラスで使う）");
    // Genericsは、型を指定するところだったら関数だけではなくてインターフェースやクラスでも使える
    var MyData_1 = /** @class */ (function () {
        function MyData_1(val) {
            this.val = val;
        }
        MyData_1.prototype.getArray = function () {
            return [this.val, this.val, this.val];
        };
        return MyData_1;
    }());
    var lesson16_1 = new MyData_1('Hello');
    var lesson16_2 = new MyData_1(5);
    console.log("lesson16_1.getArray(): ", lesson16_1.getArray());
    console.log("lesson16_2.getArray()", lesson16_2.getArray());
    // class MyData_2<T> { 
    // → class MyData_2<T extend 型> { にする
    var MyData_2 = /** @class */ (function () {
        function MyData_2(val) {
            this.val = val;
        }
        MyData_2.prototype.getArray = function () {
            return [this.val, this.val, this.val];
        };
        return MyData_2;
    }());
    var lesson16_3 = new MyData_2({ a: 16, b: 20 }); // 引数にResult160のプロパティを渡さないとコンパイルエラーになる。
    console.log("lesson16_3.getArray()", lesson16_3.getArray());
    var lesson16_4 = new MyData_2({ a: 15, b: 10, c: 'hello' });
    console.log("lesson16_4.getArray(): ", lesson16_4.getArray());
    // lesson17 内部モジュール 
    console.log("\nlesson17 内部モジュール");
    // 大規模開発で有効な方法。コードを部品化してわかりやすく整理したり、変数名とかクラス名の衝突を避けたりできる。
    var UserModule1;
    (function (UserModule1) {
        // exportを付けて外部に公開しないと UserModule.name で波線が出るので注意
        UserModule1.name = "yamamoto";
        var AddressModule1;
        (function (AddressModule1) {
            AddressModule1.zip = "111-1111";
        })(AddressModule1 = UserModule1.AddressModule1 || (UserModule1.AddressModule1 = {}));
    })(UserModule1 || (UserModule1 = {}));
    console.log("UserModule1.name: ", UserModule1.name);
    console.log("UserModule1.AddressModule.zip: ", UserModule1.AddressModule1.zip);
    // ↑長いモジュール名が困るので短くすることが出来る
    // inport を使う
    var addr = UserModule1.AddressModule1;
    console.log("addr.zip: ", addr.zip);
    console.log("UserModule2.name: ", usermodule2);
});
