// import 'babel-polyfill'

const helper = {
    getData1() {
        return fetch('//m.zhibo.focus.cn/live-app/versioncheck.json');
    },
    async getData2() {
        await fetch('//m.zhibo.focus.cn/live-app/versionAndroid.json');
    }
};

const getData = async () => {
    const result1 = await helper.getData1();
    console.log(result1);
    const result2 = await helper.getData2();
    console.log(result2);
}

async function foo() {
    try {
        var val = await getData();
        console.log(val);
    } catch (err) {
        console.log('Error: ', err.message);
    }
}

const PRPL = { foo };

export { foo }
