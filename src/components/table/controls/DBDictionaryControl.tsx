import { MRT_RowData } from 'material-react-table';
import { useWhyDidIUpdate } from '../../../hooks/useWhyDidIUpdate';
import { IconBtn } from '../../IconBtn';
import { faPlusSquare } from '@fortawesome/pro-solid-svg-icons';
import { List } from '@mui/material';
import { DBDictionaryEditSubComponent } from '../../controls/DBListEditSubComponent';
import { useToggler } from '../../../hooks/useToggler';
import { DBDictionaryItemSubComponent } from '../../controls/DBListItemSubComponent';
import { useFieldArrayControlForDictionary } from '../../../hooks/useFieldArrayControlForDictionary';
import { resolveColumns } from '../../controls/resolveColumns';

export function DBDictionaryControl<T extends MRT_RowData, TValue>(props: EditFunctionParams<T, DictionaryBack<TValue>>) {
    useWhyDidIUpdate('DBDictionaryControl', props);
    const { LiComponent, append, cols, helperText, label, name, required, remove, readonly, value, objectType, KeyControl, keyType, isDisabled, enumInfo } = useFieldArrayControlForDictionary<T, TValue, 'objectType' | 'enumInfo'>(props.column as any, 'enumInfo');
    if (objectType == null) throw new Error('no objectType on DictionaryControl');
    const [open, toggleOpen] = useToggler(false);
    return (
        !isDisabled() && (
            <fieldset name={name} aria-required={required} aria-readonly={readonly}>
                <legend className='relative w-full'>
                    {label}
                    <IconBtn icon={faPlusSquare} color='vivid' className='absolute top-0 right-0' tooltip='Insert new item' onClick={toggleOpen} />
                </legend>
                <small>{helperText}</small>
                <div>
                    {open && <DBDictionaryEditSubComponent append={append} columns={resolveColumns(cols)} handleClose={toggleOpen} KeyControl={KeyControl as any} keyType={keyType} enumInfo={enumInfo} isOpen={open} objectType={objectType} />}
                    <List>
                        {Object.entries(value ?? {}).map(([key, v]) => (
                            <DBDictionaryItemSubComponent key={key} index={key} value={v} remove={remove} objectType={objectType} LIComponent={LiComponent} />
                        ))}
                    </List>
                </div>
            </fieldset>
        )
    );
}
