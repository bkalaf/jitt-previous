import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { AutocompleteElement, CheckboxButtonGroup, DefaultValues, FormProvider, useForm } from 'react-hook-form-mui';
import { useCallback, useMemo } from 'react';
import { Grid } from '../../Grid';
import { IBrand, IClassification, IHashTag, IHashTagAssignment } from '../../../types';
import { useLookupOptions } from '../../table/controls/useLookupOptions';
import { Item } from '../../Item';
import { pushDBList } from './pushDBList';
import { toIDandLabelArray } from './toIDandLabelArray';
import { MRT_RowData } from 'material-react-table';
import { useRealmCreateListItem } from '../../../hooks/useRealmCreateListItem';

export const hashTagAssignmentDefault: DefaultValues<InitValue<IHashTagAssignment>> = {
    brands: [],
    flags: [],
    traits: [],
    hashTags: []
};
export function CreateHashTagAssignmentModal<T extends MRT_RowData>(props: { classification: IClassification; toggleOpen: () => void; open: boolean; objectType: string; finalCallback: (result: T) => void }) {
    const { open, toggleOpen, classification } = props;
    const allowedFlags = useMemo(() => toIDandLabelArray(Array.from(classification.flags ?? [])), [classification.flags]);
    const allowedTraits = useMemo(() => toIDandLabelArray(Array.from(Object.keys(classification.attributes ?? {}) ?? [])), [classification.attributes]);
    const hashTagOptions = useLookupOptions('hashTags', 'hashTag', 'name');
    const brandOptions = useLookupOptions('brands', 'brand', 'name');
    const formContext = useForm<IHashTagAssignment>({
        defaultValues: hashTagAssignmentDefault
    });
    const handleSubmit = useRealmCreateListItem<IHashTagAssignment>('hashTagAssignment', toggleOpen, classification, 'hashTagAssignments', pushDBList, classification?.hashTagAssignments);
    const traitsOnChange = useCallback((data: string[]) => {
        formContext.setValue('traits', data as any);
    }, [formContext]);
    const flagsOnChange = useCallback((data: string[]) => {
        formContext.setValue('flags', data as any);
    }, [formContext]);
    const onCancel = useCallback(
        (ev: React.MouseEvent) => {
            ev.preventDefault();
            ev.stopPropagation();
            formContext.reset();
            toggleOpen();
        },
        [formContext, toggleOpen]
    );
    const onReset = useCallback(
        (ev: React.MouseEvent) => {
            ev.preventDefault();
            ev.stopPropagation();
            formContext.reset();
        },
        [formContext]
    );
    const onSubmit = useCallback(
        (ev: React.MouseEvent) => {
            ev.preventDefault();
            ev.stopPropagation();
            formContext.handleSubmit((x) => handleSubmit(x))(ev);
            formContext.reset();
        },
        [formContext, handleSubmit]
    );
    // const columns = useDirectStaticColumns('hashTagAssignment');
    return (
        <FormProvider {...formContext}>
            <form
                onReset={(ev) => {
                    ev.stopPropagation();
                    ev.preventDefault();
                }}
                onSubmit={(ev) => {
                    ev.stopPropagation();
                    ev.preventDefault();
                }}>
                <Dialog open={open} onClose={toggleOpen} maxWidth='lg'>
                    <DialogTitle>Creating Hash Tag Assignment</DialogTitle>
                    <DialogContent>
                        <Grid columns={4} gap={2} className='w-screen'>
                            <Item>
                                <AutocompleteElement
                                    name='brands'
                                    label='Brands'
                                    control={formContext.control}
                                    multiple
                                    options={(brandOptions.data ?? []) as IBrand[]}
                                    autocompleteProps={{
                                        className: 'flex w-full read-only:bg-pink-400',
                                        selectOnFocus: true,
                                        clearOnBlur: true,
                                        handleHomeEndKeys: true,
                                        getOptionLabel: brandOptions.getOptionLabel,
                                        filterOptions: brandOptions.filterOptions,
                                        isOptionEqualToValue: brandOptions.isOptionEqualToValue,
                                        onChange: brandOptions.createOnChange(formContext as any)
                                    }}
                                    loading={brandOptions.isLoading}
                                    showCheckbox
                                />
                            </Item>
                            <Item>
                                <AutocompleteElement
                                    name='hashTags'
                                    label='Hash Tags'
                                    control={formContext.control}
                                    multiple
                                    options={(hashTagOptions.data ?? []) as IHashTag[]}
                                    autocompleteProps={{
                                        className: 'flex w-full read-only:bg-pink-400',
                                        selectOnFocus: true,
                                        clearOnBlur: true,
                                        handleHomeEndKeys: true,
                                        getOptionLabel: hashTagOptions.getOptionLabel,
                                        filterOptions: hashTagOptions.filterOptions,
                                        isOptionEqualToValue: hashTagOptions.isOptionEqualToValue,
                                        onChange: hashTagOptions.createOnChange(formContext as any)
                                    }}
                                    loading={hashTagOptions.isLoading}
                                    showCheckbox
                                />
                            </Item>
                            <Item>
                                <CheckboxButtonGroup name='traits' control={formContext.control} label='Traits' checkboxColor='callout' onChange={traitsOnChange} options={allowedTraits} />
                            </Item>
                            <Item>
                                <CheckboxButtonGroup name='flags' control={formContext.control} label='Flags' checkboxColor='callout' onChange={flagsOnChange} options={allowedFlags} />
                            </Item>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Box className='flex w-full justify-end gap-x-2'>
                            <Button className='inline-flex' type='button' color='tertiary' onClick={onCancel}>
                                Cancel
                            </Button>
                            <Button className='inline-flex' type='button' onClick={onReset} color='tertiary'>
                                Reset
                            </Button>
                            <Button className='inline-flex' type='button' onClick={onSubmit} color='tertiary'>
                                Submit
                            </Button>
                        </Box>
                    </DialogActions>
                </Dialog>
            </form>
        </FormProvider>
    );
}
