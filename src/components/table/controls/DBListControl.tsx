import { MRT_RowData } from 'material-react-table';
import { useWhyDidIUpdate } from '../../../hooks/useWhyDidIUpdate';
import { useFieldArrayControl } from '../../../hooks/useControl';
import { IconBtn } from '../../IconBtn';
import { faPlusSquare } from '@fortawesome/pro-solid-svg-icons';
import { List } from '@mui/material';
import { DBListEditSubComponent } from '../../controls/DBListEditSubComponent';
import { useToggler } from '../../../hooks/useToggler';
import { DBListItemSubComponent } from '../../controls/DBListItemSubComponent';

export function DBListControl<T extends MRT_RowData, TValue>(props: EditFunctionParams<T, ListBack<TValue>>) {
    useWhyDidIUpdate('DBListControl', props);

    const { LiComponent, append, cols, helperText, label, name, required, remove, readonly, value, objectType, fields } = useFieldArrayControl(props.column);
    if (objectType == null) throw new Error('no objectType on RealmListControl');
    const [isOpen, toggleOpen, , handleClose] = useToggler(false);
    return (
        <fieldset name={name} data-value={'toJSON' in value ? (value.toJSON as any as () => void)() : JSON.stringify(value ?? {})} aria-required={required} aria-readonly={readonly}>
            <legend className='relative'>
                {label}
                <IconBtn icon={faPlusSquare} color='highlight' className='absolute top-0 right-0' tooltip='Insert new item' onClick={toggleOpen} />
            </legend>
            <small>{helperText}</small>
            <div>
                <DBListEditSubComponent append={append} columns={cols} handleClose={handleClose} isOpen={isOpen} objectType={objectType} />
                <List>
                    {fields.map((field: Record<'id', string>, index: number) => {
                        return <DBListItemSubComponent remove={remove} index={index} objectType={objectType} value={field} key={field.id} LIComponent={LiComponent} />;
                    })}
                </List>
            </div>
        </fieldset>
    );
}
