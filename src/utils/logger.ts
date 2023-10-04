const SOURCE_COLOR = {
    BACKGROUND: '#9254de',
    NEWTABVIEW: '#36cfc9',
    'POPUPVIEW-': '#ff7a45',
};

// const LEVEL_COLOR = {
//     VERBOSE: '#595959',
//     INFO: '#237804',
//     WARN: '#ad6800',
//     ERROR: '#a8071a'
// };

const LEVEL_STYLE = {
    VERBOSE: 'margin: 0 4px; padding: 2px 4px; border-radius: 4px; background: #59595933; color: #595959',
    INFO: 'margin: 0 4px; padding: 2px 4px; border-radius: 4px; background: #23780433; color: #237804',
    WARN: 'margin: 0 4px; padding: 2px 4px; border-radius: 4px; background: #ad680033; color: #ad6800',
    ERROR: 'margin: 0 4px; padding: 2px 4px; border-radius: 4px; background: #a8071a33; color: #a8071a',
}

class Logger {
    public static readonly BACKGROUND = new Logger('BACKGROUND');
    public static readonly NEWTABVIEW = new Logger('NEWTABVIEW');
    public static readonly POPUPVIEW = new Logger('POPUPVIEW-');

    private readonly source: 'BACKGROUND' | 'NEWTABVIEW' | 'POPUPVIEW-';
    private readonly source_style: string;

    constructor(source: 'BACKGROUND' | 'NEWTABVIEW' | 'POPUPVIEW-') {
        this.source = source;
        this.source_style = `padding: 4px 8px; border-radius: 4px; background: ${SOURCE_COLOR[source]}; color: #fff;`
    }

    public verbose(message: unknown): void {
        console.log(`%c${this.source}%cVERBOSE%c${message}`, this.source_style, LEVEL_STYLE.VERBOSE, 'color: #595959cc')
    }

    public info(message: unknown): void {
        console.log(`%c${this.source}%cINFO---%c${message}`, this.source_style, LEVEL_STYLE.INFO, 'color: #237804cc')
    }

    public warn(message: unknown): void {
        console.log(`%c${this.source}%cWARN---%c${message}`, this.source_style, LEVEL_STYLE.WARN, 'color: #ad6800cc')
        console.trace('👆 trace of this warn')
    }

    public error(message: unknown): void {
        console.log(`%c${this.source}%cERROR--%c${message}`, this.source_style, LEVEL_STYLE.ERROR, 'color: #a8071acc')
        console.trace('👆 trace of this error')
    }
}

// test
// Logger.BACKGROUND.verbose('this is a verbose message')
// Logger.BACKGROUND.info('this is a info message')
// Logger.BACKGROUND.warn('this is a warn message')
// Logger.BACKGROUND.error('this is a error message')
// Logger.NEWTABVIEW.verbose('this is a verbose message')
// Logger.NEWTABVIEW.info('this is a info message')
// Logger.NEWTABVIEW.warn('this is a warn message')
// Logger.NEWTABVIEW.error('this is a error message')

export {
    Logger
}