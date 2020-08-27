const path = require('path');
module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:@typescript-eslint/recommended',
    ],
    parserOptions: {
        project: path.resolve(__dirname, './tsconfig.json'),
        tsconfigRootDir: __dirname,
        ecmaVersion: 2019,
        sourceType: 'module',
    },
    rules: {
        // @fixable 一个缩进必须用四个空格替代
        'indent': [
            'error',
            4,
            {
                SwitchCase: 1,
                flatTernaryExpressions: true
            }
        ],
        // @fixable 必须使用 === 或 !==，禁止使用 == 或 !=，与 null 比较时除外
        'eqeqeq': [
            'error',
            'always',
            {
                null: 'ignore'
            }
        ],
        // @fixable jsx 中的属性必须用双引号
        'jsx-quotes': [
            'error',
            'prefer-double'
        ],
        // @fixable 对象字面量中冒号前面禁止有空格，后面必须有空格
        'key-spacing': [
            'error',
            {
                beforeColon: false,
                afterColon: true,
                mode: 'strict',
            }
        ],
        // @fixable 禁止使用 debugger
        'no-debugger': 'error',
        // @fixable 禁止函数表达式中出现多余的括号，比如 let foo = (function () { return 1 })
        'no-extra-parens': [
            'error',
            'functions'
        ],
        // @fixable 禁止出现多余的分号
        'no-extra-semi': 'error',
        // @fixable if 后面必须要有 {，除非是单行 if
        'curly': [
            'error',
            'multi-line',
            'consistent'
        ],
        // switch 语句必须有 default
        'default-case': 'off',
        // a标签锚点
        "jsx-a11y/anchor-is-valid": "off",
        // @fixable 链式调用的时候，点号必须放在第二行开头处，禁止放在第一行结尾处
        'dot-location': [
            'error',
            'property'
        ],
        // @fixable 禁止出现连续的多个空格，除非是注释前，或对齐对象的属性、变量定义、import 等
        'no-multi-spaces': [
            'error',
            {
                ignoreEOLComments: true,
                exceptions: {
                    Property: true,
                    BinaryExpression: false,
                    VariableDeclarator: true,
                    ImportDeclaration: true
                }
            }
        ],
        // @fixable 禁止将 undefined 赋值给变量
        'no-undef-init': 'error',
        // @fixable 数组的括号内的前后禁止有空格
        'array-bracket-spacing': [
            'error',
            'never'
        ],
        // @fixable 逗号前禁止有空格，逗号后必须要有空格
        'comma-spacing': [
            'error',
            {
                'before': false,
                'after': true
            }
        ],
        // @fixable 关键字前后必须有空格
        'keyword-spacing': [
            'error',
            {
                before: true,
                after: true
            }
        ],
        // 单行注释必须写在上一行
        'line-comment-position': 'error',
        // 代码块嵌套的深度禁止超过 5 层
        'max-depth': [
            'error',
            5
        ],
        // 回调函数嵌套禁止超过 3 层，多了请用 async await 替代
        'max-nested-callbacks': [
            'error',
            3
        ],
        // 函数的参数禁止超过 7 个
        'max-params': [
            'error',
            7
        ],
        // @fixable new 后面的类必须有小括号
        'new-parens': 'error',
        // @fixable 禁止出现超过三行的连续空行
        'no-multiple-empty-lines': [
            'error',
            {
                max: 3,
                maxEOF: 1,
                maxBOF: 1
            }
        ],
        // @fixable 禁止行尾有空格
        'no-trailing-spaces': 'error',
        // @fixable 禁止属性前有空格，比如 foo. bar()
        'no-whitespace-before-property': 'error',
        // @fixable 禁止 if 后面不加大括号而写两行代码
        'nonblock-statement-body-position': [
            'error',
            'beside',
            {
                overrides: {
                    while: 'below'
                }
            }
        ],
        // @fixable 对象字面量只有一行时，大括号内的首尾必须有空格
        'object-curly-spacing': [
            'error',
            'always',
            {
                arraysInObjects: true,
                objectsInObjects: false
            }
        ],
        // 禁止变量申明时用逗号一次申明多个
        'one-var': [
            'error',
            'never'
        ],
        // @fixable 变量申明必须每行一个
        'one-var-declaration-per-line': [
            'error',
            'always'
        ],
        // @fixable 必须使用单引号，禁止使用双引号
        'quotes': [
            'error',
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true
            }
        ],
        // @fixable 一行有多个语句时，分号前面禁止有空格，分号后面必须有空格
        'semi-spacing': [
            'error',
            {
                before: false,
                after: true
            }
        ],
        // @fixable 分号必须写在行尾，禁止在行首出现
        'semi-style': [
            'error',
            'last'
        ],
        // @fixable function 的小括号之前必须要有空格
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'ignore',
                named: 'never',
                asyncArrow: 'always'
            }
        ],

        // @fixable 小括号内的首尾禁止有空格
        'space-in-parens': [
            'error',
            'never'
        ],
        // @fixable 操作符左右必须有空格，比如 let sum = 1 + 2;
        'space-infix-ops': 'error',
        // @fixable new, typeof 等后面必须有空格，++, -- 等禁止有空格
        'space-unary-ops': [
            'error',
            {
                words: true,
                nonwords: false
            }
        ],
        // @fixable 注释的斜线或 * 后必须有空格
        'spaced-comment': [
            'error',
            'always',
            {
                block: {
                    exceptions: [
                        '*'
                    ],
                    balanced: true
                }
            }
        ],
        // @fixable case 的冒号前禁止有空格，冒号后必须有空格
        'switch-colon-spacing': [
            'error',
            {
                after: true,
                before: false
            }
        ],
        // @fixable 箭头函数的箭头前后必须有空格
        'arrow-spacing': [
            'error',
            {
                before: true,
                after: true
            }
        ],
        // constructor 中必须有 super
        'constructor-super': 'error',
        // @fixable generator 的 * 前面禁止有空格，后面必须有空格
        'generator-star-spacing': [
            'error',
            {
                before: false,
                after: true
            }
        ],
        // 禁止对定义过的 class 重新赋值
        'no-class-assign': 'error',
        // 禁止对使用 const 定义的常量重新赋值
        'no-const-assign': 'error',
        // 禁止重复定义类
        'no-dupe-class-members': 'error',
        // 禁止重复 import 模块
        'no-duplicate-imports': 'error',
        // 禁止使用 new 来生成 Symbol
        'no-new-symbol': 'error',
        // @fixable 禁止解构时出现同样名字的的重命名，比如 let { foo: foo } = bar;
        'no-useless-rename': 'error',
        // @fixable 禁止使用 var
        'no-var': 'error',
        // @fixable 申明后不再被修改的变量必须使用 const 来申明
        'prefer-const': 'error',
        // 必须使用 ...args 而不是 arguments
        'prefer-rest-params': 'error',
        // @fixable 必须使用模版字符串而不是字符串连接
        'prefer-template': 'error',
        // @fixable ... 的后面禁止有空格
        'rest-spread-spacing': [
            'error',
            'never'
        ],
        // @fixable 表达式必须以分号结尾
        'semi': ['error', 'always'],
    }
};