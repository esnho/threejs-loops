import './index.css';
const decamelize = require('decamelize');
const titleize = require('titleize');

const Loops = [
    'CubeLoop',
    'GridLoop',
    'SkyscrapersLoop',
    'SunLoop',
    'FloatingBio',
    'MorphingSphere',
    'Lissajoux',
    'OpenHead',
    'TreeExample'
]

class App {
    constructor() {
        this.loops = [];
    }

    Init() {
        this.CreateMenu();
        this.AddCloseRendererToMenu();
        this.PopulateMenu();
        this.CreateOpenMenuButton();
        this.StartLoop( this.loops[this.loops.length-1] );
    }

    CreateMenu() {
        this.menuContainer = document.createElement('div');
        this.menuContainer.setAttribute('id', 'menu-container');
        this.menuContainer.setAttribute('class', 'show');
        this.menu = document.createElement('ul');
        this.menu.setAttribute('id', 'menu');
        this.menuContainer.appendChild(this.menu);
        document.body.appendChild(this.menuContainer);
    }

    AddCloseRendererToMenu() {
        this.menu.appendChild(this.MenuElement('Close rendering', (e) => {
            this.DestroyScene();
            this.SelectMenuVoice(e.target);
        }));
    }

    PopulateMenu() {
        for (let loop of Loops) {
            this.loops.push(
                this.AddLoopButton(
                    titleize(decamelize(loop, ' ')),
                    loop
                )
            );
        }
    }

    AddLoopButton(text, loop) {
        const menuVoice = this.MenuElement(
            text,
            e => {
                this.StartLoop(e.target);
            });
        menuVoice.setAttribute('loopName', loop);
        return this.menu.appendChild(menuVoice);
    }

    MenuElement(text, action) {
        const element = document.createElement('li');
        element.innerHTML = text;
        element.addEventListener('click', action);
        return element;
    }

    StartLoop(targetButton) {
        console.log(targetButton.parentElement);
        console.log(targetButton);
        
        targetButton.parentElement.scrollTo(0, targetButton.getBoundingClientRect().top)

        this.SelectMenuVoice(targetButton);
        console.log("starting loop");
        this.StartLoading();
        import(
            /* webpackChunkName: '[request]' */
            `./Loops/${targetButton.getAttribute('loopname')}`)
        .then(({default: newloop}) => {
            this.InstantiateLoop(newloop);
        });
    }

    StartLoading() {        
        if (!this.loading) {
            this.loading = document.createElement('div');
            this.loading.className = 'loading';
            document.body.append(this.loading);
        }
    }

    StopLoading() {
        if (!this.loading) return;
        this.loading.remove();
        this.loading = null;
    }

    SelectMenuVoice(selectedVoice) {
        for (const voice of this.menu.childNodes) {
            voice.classList.remove('selected');
        }
        selectedVoice.classList.add('selected');
    }

    InstantiateLoop(loop) {
        this.DestroyScene();
        import(
            /* webpackChunkName: "basic-scene" */
            './Objects/BasicScene.js' )
        .then((module) => {
            this.basicScene = new module.default();
            this.basicScene.InitScene();
            this.loop = new loop({
                scene: this.basicScene,
                onLoad: () => this.StopLoading()
            });
            this.basicScene.Add(this.loop);
        })
    }

    CreateOpenMenuButton() {
        const openMenuButton = document.createElement('a');
        openMenuButton.innerHTML = '&#9776';
        openMenuButton.setAttribute('id', 'menu-ctrl');
        openMenuButton.addEventListener('click', () => this.ShowHideMenu());
        document.body.appendChild(openMenuButton);
    }

    ShowHideMenu() {
        const currentClass = this.menuContainer.getAttribute('class');
        // https://css-tricks.com/restart-css-animation/
        // next three lines are a workaround to retrigger anim
        this.menuContainer.classList.remove(currentClass);
        void this.menuContainer.offsetWidth;
        this.menuContainer.classList.add(currentClass === 'hide' ? 'show' : 'hide');
    }

    DestroyScene() {
        if (!this.basicScene) {
            return;
        }
        this.basicScene.Destroy();
        this.basicScene = null;
    }
}

const app = new App();
app.Init();