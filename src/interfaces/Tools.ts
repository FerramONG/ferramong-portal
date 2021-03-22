export interface Tool {
    name: string;
    id: string;
    description: string;
    instructions: string;
    owner: string;
    price: number;
    category: ToolCategory;
    availableFrom: Date;
    availableUntil: Date;
}

export enum ToolCategory {
    POWERTOOL = 'powerTool',
    MANUALTOOL = 'manualTool',
}