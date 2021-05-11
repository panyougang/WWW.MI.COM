(function () {
    'use strict';
    const cookie = {
        get(key) {
            if (document.cookie) {
                let cookies = document.cookie.split('; ');
                for (let val of cookies) {
                    let item = val.split('=');
                    if (item[0] == key) {
                        return item[1]
                    }
                }
            }
            return '';
        },
        set(key, val, day) {
            if (typeof day === 'number') {
                let d = new Date();
                d.setDate(d.getDate() + day);
                document.cookie = `${key}=${val};path = /;expires=${d}`;
            } else {
                document.cookie = `${key}=${val};path = /`;
            }
            return this;
        },
        remove(key) {
            this.set(key, '', -1);
        }

    }
    window.cookie = cookie;
})();