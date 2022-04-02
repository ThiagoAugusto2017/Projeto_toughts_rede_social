  let email = "thiagohotmail.com"
        const regexp = /\S+@\w+\.\w{2,6}(\.\w{2})?/g
        console.log(regexp.test(email))