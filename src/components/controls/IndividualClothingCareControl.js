"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndividualClothingCareControl = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const react_1 = require("react");
const laundryCare_1 = require("../../schema/laundryCare");
const react_hook_form_mui_1 = require("react-hook-form-mui");
const useDependencies_1 = require("../../hooks/useDependencies");
function IndividualClothingCareControl(section, name, ...dependencies) {
    return function ClothingCareControl() {
        // const section = name.split('.').reverse()[0] as keyof typeof ClothingCareMap;
        const options = (0, react_1.useMemo)(() => Object.entries(laundryCare_1.ClothingCareMap[section]).map(([k, v]) => (Object.assign({ key: k }, v))), []);
        const formContext = (0, react_hook_form_mui_1.useFormContext)();
        const list = formContext.watch(name);
        const isSelected = (0, react_1.useCallback)((item) => {
            return list.includes(item);
        }, [list]);
        const onClick = (0, react_1.useCallback)((key) => (ev) => {
            ev.preventDefault();
            ev.stopPropagation();
            if (isSelected(key)) {
                formContext.setValue(name, list.filter((x) => x !== key));
            }
            else {
                formContext.setValue(name, [...list, key]);
            }
        }, [formContext, isSelected, list]);
        const isDisabled = (0, useDependencies_1.useDependencies)(...dependencies);
        return (!isDisabled() && ((0, jsx_runtime_1.jsx)(material_1.FormControl, { children: (0, jsx_runtime_1.jsx)(material_1.FormGroup, { row: true, "aria-labelledby": '', className: 'grid grid-cols-10 gap-2', children: options.map(({ Element, text, key }) => ((0, jsx_runtime_1.jsx)(material_1.Tooltip, { title: text, children: (0, jsx_runtime_1.jsx)(material_1.IconButton, { className: 'flex h-10 w-10 rounded-none object-contain object-contain p-0 aria-selected:bg-red-500 aria-unselected:bg-sky-400', "aria-selected": isSelected(key), onClick: onClick(key), children: (0, jsx_runtime_1.jsx)(Element, { className: 'inline-block ' }) }, key) }, key)
                // <FormControlLabel
                //     key={key}
                //     label={text}
                //     aria-selected={isSelected(key)}
                //     className='flex'
                //     control={
                //         <IconButton key={key} className='aria-selected:bg-red-500 inline-flex h-7 w-7 rounded-none object-contain p-0 aria-unselected:bg-sky-400 flex' aria-selected={isSelected(key)} onClick={onClick(key)}>
                //             <Element className='inline-block h-9 w-9' />
                //         </IconButton>
                //     }
                // />
                )) }) }))
        // <FormControl className='flex w-full'>
        //     <FormLabel>{label}</FormLabel>
        //     <FormGroup row aria-labelledby=''>
        //         {options.map(({ Element, text, key }) => (
        //             <FormControlLabel
        //                 key={key}
        //                 label={text}
        //                 aria-selected={isSelected(key)}
        //                 control={
        //                     <IconButton key={key} className='inline-flex object-contain p-0 rounded-none h-7 w-7 aria-selected:bg-magenta-500 aria-unselected:bg-sky-400' aria-selected={isSelected(key)} onClick={onClick(key)}>
        //                         <Element className='inline-block h-7 w-7' />
        //                     </IconButton>
        //                 }
        //             />
        //         ))}
        //     </FormGroup>
        // </FormControl>
        );
    };
}
exports.IndividualClothingCareControl = IndividualClothingCareControl;
//# sourceMappingURL=IndividualClothingCareControl.js.map