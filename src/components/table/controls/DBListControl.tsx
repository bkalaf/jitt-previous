import { MRT_RowData } from 'material-react-table';
import { useWhyDidIUpdate } from '../../../hooks/useWhyDidIUpdate';
import { IconBtn } from '../../IconBtn';
import { faPlusSquare } from '@fortawesome/pro-solid-svg-icons';
import { List } from '@mui/material';
import { DBDictionaryEditSubComponent, DBListEditSubComponent } from '../../controls/DBListEditSubComponent';
import { useToggler } from '../../../hooks/useToggler';
import { DBDictionaryItemSubComponent, DBListItemSubComponent } from '../../controls/DBListItemSubComponent';
import { useFieldArrayControl } from '../../../hooks/useFieldArrayControl';
import { useFieldArrayControlForDictionary } from '../../../hooks/useFieldArrayControlForDictionary';

export function DBDictionaryControl<T extends MRT_RowData, TValue>(props: EditFunctionParams<T, DictionaryBack<TValue>>) {
    useWhyDidIUpdate('DBDictionaryControl', props);
    const { LiComponent, append, cols, helperText, label, name, required, remove, readonly, value, objectType, KeyControl, keyType } = useFieldArrayControlForDictionary<T, TValue, 'objectType'>(props.column as any);
    if (objectType == null) throw new Error('no objectType on DictionaryControl');
    const [open, toggleOpen] = useToggler(false);
    return (
        <fieldset name={name} aria-required={required} aria-readonly={readonly}>
            <legend className='relative w-full'>
                {label}
                <IconBtn icon={faPlusSquare} color='vivid' className='absolute right-0 top-0' tooltip='Insert new item' onClick={toggleOpen} />
            </legend>
            <small>{helperText}</small>
            <div>
                <DBDictionaryEditSubComponent append={append} columns={cols} handleClose={toggleOpen} KeyControl={KeyControl as any} keyType={keyType} isOpen={open} objectType={objectType} />
                <List>
                    {Object.entries(value ?? {}).map(([key, v]) => (
                        <DBDictionaryItemSubComponent key={key} index={key} value={v} remove={remove} objectType={objectType} LIComponent={LiComponent} />
                    ))}
                </List>
            </div>
        </fieldset>
    );
}
export function DBListControl<T extends MRT_RowData, TValue>(props: EditFunctionParams<T, ListBack<TValue>>) {
    useWhyDidIUpdate('DBListControl', props);

    const { LiComponent, append, cols, helperText, label, name, required, remove, readonly, value, objectType } = useFieldArrayControl<T, TValue, 'objectType'>(props.column as any);
    if (objectType == null) throw new Error('no objectType on RealmListControl');
    const [isOpen, toggleOpen, , handleClose] = useToggler(false);
    return (
        <fieldset name={name} aria-required={required} aria-readonly={readonly}>
            <legend className='relative flex w-full'>
                {label}
                <IconBtn icon={faPlusSquare} color='vivid' className='absolute right-0 top-0' tooltip='Insert new item' onClick={toggleOpen} />
            </legend>
            <small>{helperText}</small>
            <div>
                <DBListEditSubComponent append={append} columns={cols} handleClose={handleClose} isOpen={isOpen} objectType={objectType} />
                <List>
                    {(value ?? []).map((item: TValue, index: number) => {
                        return <DBListItemSubComponent remove={remove} index={index} objectType={objectType} value={item} key={index} LIComponent={LiComponent} />;
                    })}
                </List>
            </div>
        </fieldset>
    );
}
