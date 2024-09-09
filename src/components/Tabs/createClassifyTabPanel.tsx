/* eslint-disable no-console */
import { MRT_RowData } from 'material-react-table';
import { useMemo, useState } from 'react';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { convertProduct } from '../../hooks/OldProductDetailsTab';
import { Grid } from '../Grid';
import { Item } from '../Item';
import { Button } from '@mui/material';
import { useUpdateRecord } from '../../hooks/useUpdateRecord';
import { BSON } from 'realm';
import { IClassification } from '../../types';
import { PathControl } from '../../taxonomy/graph';
import { AutocompleteElement, CheckboxButtonGroup } from 'react-hook-form-mui';
import { ClassificationAttribute } from './ClassificationAttribute';
import { useMatchClassificationPath } from './useMatchClassificationPath';

export function dbListCompare(left: any[] | DBList<any> = [], right: any[] | DBList<any> = []){
    if (left.length !== right.length) return false;
    return left.length === 0 || left.every((l, ix) => l === right[ix]);
}
export function dbListIncludes(left: any[] | DBList<any> = [], right: any[] | DBList<any> = []) {
    if (left.length !== right.length) return false;
    return left.length === 0 || left.every((l) => right.includes(l));
}
export function dbDictionaryCompare(left: Record<string, unknown> | DBDictionary<unknown> = {}, right: Record<string, unknown> | DBDictionary<unknown> = {}) {
    const rightKeys = Object.keys(right);
    const leftKeys = Object.keys(left);
    if (!dbListIncludes(rightKeys, leftKeys)) return false;
    return rightKeys.every(key => right[key] === left[key]);
}
export function createClassifyTabPanel<T extends MRT_RowData>() {
    return function ClassifyPanel(props: RenderDetailTabPanelProps<T>) {
        // const [counter, setCounter] = useState(1);
        const values = useMemo(() => convertProduct(props.row.original), [props.row.original])
        const formContext = useForm<T>({
            values: values
        });
        const { handleSubmit } = useUpdateRecord<T & { _id: BSON.ObjectId }>(formContext as any, props.row.id, props.table as any, true, 'product');
        const onClick = useMemo(
            () =>
                formContext.handleSubmit((data) => {
                    handleSubmit(data as any);
                    // {
                    //     onSuccess: (data) => {
                    //         if (data) {
                    //             console.info(`data`, data);
                    //             const func = () => {
                    //                 const all = realm.objects<IClassification>('classification');
                    //                 const matchedClassification = all.filter((x) => {
                    //                     console.info(`x`, x);
                    //                     return (dbListCompare(x.path, data.path) && x.flags.length === 0) || (x.flags.every((flag) => data.flags.includes(flag)) && Object.entries(x.attributes).every(([key, value]) => ((data as any)[key] = value)));
                    //                 });
                    //                 if (matchedClassification.length === 0) {
                    //                     alert('NO MATCHED CLASSIFICATION');
                    //                 } else {
                    //                     console.error(`matched`, matchedClassification[0]);
                    //                     (props.row.original as any as IProduct).classification = matchedClassification[0];
                    //                 }
                    //             };
                    //             runTransaction(realm, func);
                    //             invalidator();
                    //         }
                    //     };
                    // }

                    
                }),
            [formContext, handleSubmit]
        );
        const path = useWatch({
            control: formContext.control,
            name: 'path' as any
        })
        const { flagOptions: flags, traitOptions: attributes, selectOptions: dropdownOptions } = useMatchClassificationPath(path);
        return (
            <FormProvider {...formContext}>
                <Grid columns={4} gap={2} className='w-full'>
                    <PathControl />
                    <CheckboxButtonGroup control={formContext.control} checkboxColor='callout' options={flags.map((x) => ({ id: x, label: x }))} name={'flags' as any} label='Flags' />
                    <ClassificationAttribute name='bagType' enumKey='bagTypes' allowed={attributes ?? []} />
                    <ClassificationAttribute name='gender' enumKey='genders' allowed={attributes ?? []} />
                    <ClassificationAttribute name='jewelryType' enumKey='jewelryTypes' allowed={attributes ?? []} />
                    <ClassificationAttribute name='accessoryType' enumKey='apparelAccessoryTypes' allowed={attributes ?? []} />
                    <ClassificationAttribute name='youthSize' enumKey='youthSizes' allowed={attributes ?? []} />
                    <ClassificationAttribute name='headAccessoryType' enumKey='headAccessoryTypes' allowed={attributes ?? []} />
                    <ClassificationAttribute name='footwearType' enumKey='footwearTypes' allowed={attributes ?? []} />
                    <ClassificationAttribute name='shoeType' enumKey='shoeTypes' allowed={attributes ?? []} />
                    <ClassificationAttribute name='undergarmentType' enumKey='undergarmentTypes' allowed={attributes ?? []} />
                    <ClassificationAttribute name='sleepwearType' enumKey='sleepwearTypes' allowed={attributes ?? []} />
                    <ClassificationAttribute name='swimwearType' enumKey='swimwearTypes' allowed={attributes ?? []} />
                    <ClassificationAttribute name='dressType' enumKey='dressTypes' allowed={attributes ?? []} />
                    <ClassificationAttribute name='blazerType' enumKey='blazerTypes' allowed={attributes ?? []} />
                    <ClassificationAttribute name='suitType' enumKey='suitTypes' allowed={attributes ?? []} />
                    <ClassificationAttribute name='jacketType' enumKey='jacketTypes' allowed={attributes ?? []} />
                    <ClassificationAttribute name='casualShirtType' enumKey='casualShirtTypes' allowed={attributes ?? []} />
                    <ClassificationAttribute name='formalShirtType' enumKey='formalShirtTypes' allowed={attributes ?? []} />
                    <ClassificationAttribute name='neckType' enumKey='neckTypes' allowed={attributes ?? []} />
                    <ClassificationAttribute name='sleeveLength' enumKey='sleeveLengths' allowed={attributes ?? []} />
                    <ClassificationAttribute name='skirtType' enumKey='skirtTypes' allowed={attributes ?? []} />
                    <ClassificationAttribute name='pantStyle' enumKey='pantStyles' allowed={attributes ?? []} />
                    <ClassificationAttribute name='materialStyle' enumKey='materialStyles' allowed={attributes ?? []} />
                    <ClassificationAttribute name='legStyle' enumKey='legStyles' allowed={attributes ?? []} />
                    <AutocompleteElement<IClassification>
                        name={'classification' as any}
                        control={formContext.control as any}
                        options={Array.from(dropdownOptions)}
                        autocompleteProps={{
                            getOptionLabel: (option: IClassification) => option?.taxonomy?.fullname ?? 'unknown',
                            clearOnEscape: true,
                            handleHomeEndKeys: true,
                            isOptionEqualToValue: (option, value) => {
                                console.info(`isOptionEqualToValue`, option, value);
                                return (option?._id?.toHexString() ?? '') === (value?._id?.toHexString() ?? '');
                            }
                        }}
                        label='Classification'
                    />
                    <Item className='col-span-4 col-start-1 flex w-full justify-center'>
                        <Button type='button' variant='contained' color='metal' onClick={onClick}>
                            Submit
                        </Button>
                    </Item>
                </Grid>
            </FormProvider>
        );
    };
}
