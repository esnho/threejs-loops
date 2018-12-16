import './index.css';

const CubeLoop = 'CubeLoop.js';
const GridLoop = 'GridLoop.js';
const SkyscrapersLoop = 'SkyscrapersLoop.js';
const SunLoop = 'SunLoop.js';
const FloatingBio = 'FloatingBio.js';

class App {
    constructor() {
        this.loops = [];
    }

    Init() {
        this.CreateMenu();
        this.AddCloseRendererToMenu();
        this.PopulateMenu();
        this.CreateOpenMenuButton();
        // this.StartLoop( this.loops[this.loops.length - 1] );
    }

    CreateMenu() {
        this.menu = document.createElement('ul');
        this.menu.setAttribute('id', 'menu');
        this.menu.setAttribute('class', 'show');
        document.body.appendChild(this.menu);
    }

    AddCloseRendererToMenu() {
        this.menu.appendChild(this.MenuElement('Close rendering', (e) => {
            this.DestroyScene();
            this.SelectMenuVoice(e.target);
        }));
    }

    PopulateMenu() {
        this.loops.push(this.AddLoopButton('Cube Loop', CubeLoop));
        this.loops.push(this.AddLoopButton('Grid Loop 0', GridLoop));
        this.loops.push(this.AddLoopButton('Skyscrapers', SkyscrapersLoop));
        this.loops.push(this.AddLoopButton('Sun Loop', SunLoop));
        this.loops.push(this.AddLoopButton('Floating Bio', FloatingBio));
    }

    AddLoopButton(text, loop) {
        const menuVoice = this.MenuElement(
            text,
            e => this.StartLoop(e.target));
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
        this.SelectMenuVoice(targetButton);
        console.log("starting loop");
        this.StartLoading();
        import(
            /* webpackChunkName: '[request]' */
            './Loops/'+ targetButton.getAttribute('loopname') )
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
        const currentClass = this.menu.getAttribute('class');
        // https://css-tricks.com/restart-css-animation/
        // next three lines are a workaround to retrigger anim
        this.menu.classList.remove(currentClass);
        void this.menu.offsetWidth;
        this.menu.classList.add(currentClass === 'hide' ? 'show' : 'hide');
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