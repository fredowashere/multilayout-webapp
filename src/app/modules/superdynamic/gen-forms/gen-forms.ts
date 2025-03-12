const fs = require("fs");
const path = require("path");

function humanize(str: string) {
    return str.toLowerCase().split("_").map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(" ");
}

function pascalize(str: string) {
    return str.toLowerCase().split("_").map(s => s.charAt(0).toUpperCase() + s.slice(1)).join("");
}

function camelize(str: string) {
    return pascalize(str)[0].toLowerCase() + pascalize(str).slice(1);
}

function hyphenate(str: string) {
    return str.toLowerCase().split("_").join("-");
}

function colType2CtrlType(type: "NUMBER" | "VARCHAR2" | "TIMESTAMP(6) WITH TIME ZONE" | "DATE" | "BLOB" | "CLOB") {
    switch (type) {
        case "NUMBER":
            return "number";
        case "VARCHAR2":
            return "text";
        case "TIMESTAMP(6) WITH TIME ZONE":
            return "datetime";
        case "DATE":
            return "date";
        case "BLOB":
            return "file";
        case "CLOB":
            return "textarea";
    }
}

function getTextControl(fieldName: string, defaultVal = null) {
    const html = `
                <app-input
                    name="${hyphenate(fieldName)}"
                    label="${humanize(fieldName)}"
                    data-column-name="${fieldName}"
                    [ngControl]="form.controls.${camelize(fieldName)}"
                    [floatingLabel]="true"
                />
    `;
    const ts = `${tab(2)}${camelize(fieldName)}: new FormControl<string | null>(${defaultVal}),\n`;
    return { html, ts };
}

function generateFormControl(type: "text" | "number" | "textarea" | "datetime" | "date" | "file", fieldName: string, defaultVal = null) {
    switch (type) {
        case "text":
            return getTextControl(fieldName, defaultVal);
        case "number":
            return getTextControl(fieldName, defaultVal)// getNumberControl();
        case "textarea":
            return getTextControl(fieldName, defaultVal)// getTextareaControl();
        case "datetime":
            return getTextControl(fieldName, defaultVal)// getDatetimeControl();
        case "date":
            return getTextControl(fieldName, defaultVal)// getDateControl();
        case "file":
            return getTextControl(fieldName, defaultVal)// getFileControl();
    }
}

function getImport(component: string, path: string) {
    return `import { ${component} } from "./output-forms/${path}.component";\n`
}

function getRoute(path: string, component: string) {
    return `${tab()}{ path: '${path}', component: ${component} },\n`
}

function getRoutesTemplate() {
    return `{{imports}}
    
export const genFormRoutes = [
{{routes}}
];
`
}

function tab(n = 1) {
    return "    ".repeat(n);
}

(async function () {
    const tablesPath = path.join(__dirname, "tables.json");
    const tables = JSON.parse(fs.readFileSync(tablesPath, "utf8"));

    const dataTypes = new Set();

    let routesTemplates = getRoutesTemplate();
    let imports = "";
    let routes = "";
    for (const table of tables) {
        let formTemplate = fs.readFileSync(path.join(__dirname, "form.template.ts"), "utf8");

        const tableName = table.name;
        const tableNameHyphenated = hyphenate(table.name);
        const tableNameCamelized = camelize(table.name);
        const tableNamePascalized = pascalize(table.name);
        formTemplate = formTemplate.replace(/{{tableNameHyphenated}}/g, tableNameHyphenated);
        formTemplate = formTemplate.replace(/{{tableNameCamelized}}/g, tableNameCamelized);
        formTemplate = formTemplate.replace(/{{tableNamePascalized}}/g, tableNamePascalized);
        formTemplate = formTemplate.replace(/{{tableName}}/g, tableName);

        imports += getImport(`GenForm${tableNamePascalized}`, tableNameHyphenated);
        routes += getRoute(`gen-forms/${tableNameHyphenated}`, `GenForm${tableNamePascalized}`);

        let formHtmlContent = "";
        let formTsContent = "";
        for (const col of table.columns) {
            dataTypes.add(col.data_type);

            const controlType = colType2CtrlType(col.data_type);
            const { html, ts } = generateFormControl(controlType, col.column_name);

            formHtmlContent += html;
            formTsContent += ts;
        }

        formTemplate = formTemplate.replace(/{{formHtmlContent}}/g, formHtmlContent);
        formTemplate = formTemplate.replace(/{{formTsContent}}/g, formTsContent);

        fs.writeFileSync(path.join(__dirname, `output-forms/${tableNameHyphenated}.component.ts`), formTemplate);
    }

    routesTemplates = routesTemplates.replace(/{{imports}}/g, imports);
    routesTemplates = routesTemplates.replace(/{{routes}}/g, routes);

    fs.writeFileSync(path.join(__dirname, `gen-form-routing.ts`), routesTemplates);
})();