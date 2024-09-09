import { MRT_RowData } from 'material-react-table';
import { useWhyDidIUpdate } from '../../../hooks/useWhyDidIUpdate';
import { IconBtn } from '../../IconBtn';
import { faPlusSquare } from '@fortawesome/pro-solid-svg-icons';
import { List } from '@mui/material';
import { DBListEditSubComponent } from '../../controls/DBListEditSubComponent';
import { useToggler } from '../../../hooks/useToggler';
import { DBListItemSubComponent } from '../../controls/DBListItemSubComponent';
import { useFieldArrayControl } from '../../../hooks/useFieldArrayControl';
import { useFormContext } from 'react-hook-form';

export function DBListControl<T extends MRT_RowData, TValue>(props: EditFunctionParams<T, ListBack<TValue>>) {
    useWhyDidIUpdate('DBListControl', props);
    const { LiComponent, append, cols, helperText, label, name, required, remove, readonly, value, objectType, isDisabled, ModalComponent } = useFieldArrayControl<T, TValue, 'objectType'>(props.column as any);
    const formContext = useFormContext();
    const ModalComp = (ModalComponent ?? DBListEditSubComponent) as ModalFunctionComponent<any>;
    if (objectType == null) throw new Error('no objectType on RealmListControl');
    const [isOpen, toggleOpen, , handleClose] = useToggler(false);
    /*
    {isOpen && <DBListEditSubComponent append={append} columns={resolveColumns(cols)} handleClose={handleClose} isOpen={isOpen} objectType={objectType} />}
    */
    return (
        !isDisabled() && (
            <fieldset name={name} aria-required={required} aria-readonly={readonly}>
                <legend className='relative flex w-full'>
                    {label}
                    <IconBtn icon={faPlusSquare} color='vivid' className='absolute right-0 top-0' tooltip='Insert new item' onClick={toggleOpen} />
                </legend>
                <small>{helperText}</small>
                <div>
                    {isOpen && <ModalComp open={isOpen} toggleOpen={handleClose} classification={formContext.getValues() as any} objectType={objectType} finalCallback={append} columns={cols as any} />}
                    <List>
                        {(value ?? []).map((item: TValue, index: number) => {
                            return <DBListItemSubComponent remove={remove} index={index} objectType={objectType} value={item} key={index} LIComponent={LiComponent} />;
                        })}
                    </List>
                </div>
            </fieldset>
        )
    );
}
