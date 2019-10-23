import { Bean, IStatusPanelComp, IStatusBarService } from '@ag-community/grid-core';

@Bean('statusBarService')
export class StatusBarService implements IStatusBarService {

    private allComponents: { [p: string]: IStatusPanelComp } = {};

    // tslint:disable-next-line
    constructor() {}

    public registerStatusPanel(key: string, component: IStatusPanelComp): void {
        this.allComponents[key] = component;
    }

    public getStatusPanel(key: string): IStatusPanelComp {
        return this.allComponents[key];
    }
}