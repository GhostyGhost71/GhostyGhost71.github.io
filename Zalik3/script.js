var header = document.getElementById("header")
        var content = document.getElementById("content")
        var footer = document.getElementById("footer")
        var userInfo = document.getElementById("userInfo")

        class HTMLPage {
            constructor(user) {
                this.firstName = user.firstName
                this.lastName = user.lastName
                this.nick = user.nick
                this.email = user.email
                this.avatar = user.avatar
                this.author = user.author
                this.license = user.license
            }
            renderPage() {
                var aFromHeader__1 = document.createElement("a")
                aFromHeader__1.innerHTML = "Shop"
                aFromHeader__1.href = "shop.html"
                header.appendChild(aFromHeader__1)

                var aFromHeader__2 = document.createElement("a")
                aFromHeader__2.innerHTML = "Main"
                aFromHeader__2.href = "main.html"
                header.appendChild(aFromHeader__2)

                var brFromContent__1 = document.createElement("br")
                brFromContent__1.setAttribute('Clear', 'All')
                userInfo.appendChild(brFromContent__1)

                var imgFromContent__1 = document.createElement("img")
                imgFromContent__1.src = this.avatar
                imgFromContent__1.className = "imgFromContent__1"
                imgFromContent__1.setAttribute('align', 'left')
                userInfo.appendChild(imgFromContent__1)

                var pFromContent__1 = document.createElement("p")
                pFromContent__1.innerHTML = this.email
                pFromContent__1.className = "pNickEmail"
                userInfo.appendChild(pFromContent__1)

                var pFromContent__2 = document.createElement("p")
                pFromContent__2.innerHTML = this.nick
                pFromContent__2.className = "pNickEmail"
                userInfo.appendChild(pFromContent__2)

                var brFromContent__1 = document.createElement("br")
                brFromContent__1.setAttribute('Clear', 'All')
                content.appendChild(brFromContent__1)

                var h1FromContent__1 = document.createElement("h1")
                h1FromContent__1.innerHTML = `Welcome, ${this.firstName} ${this.lastName}!`
                content.appendChild(h1FromContent__1)
            }
        }
        var user = {
            firstName: "John",
            lastName: "Doe",
            nick: "johnd",
            email: "johnd@example.com",
            avatar: "avatar.png",
            author: "John Doe",
            license: "All rights reserved",
        }

        var myHTMLPage = new HTMLPage(user)
        myHTMLPage.renderPage()