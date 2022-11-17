import { FormWrapper } from "./FromWrapper";

type AccountData={
    email:string
    passward: string
   
}

type AccountFormProps=AccountData &{
   
    updateFields:(fields: Partial<AccountData>)=> void
}
export function AccountForm({email,passward,updateFields}:AccountFormProps){
    return(
        <FormWrapper title="Account Creations">
    <label>Email</label>
    <input autoFocus required type="Email" value={email} onChange={e=>updateFields({email:e.target.value})}/>
    <label>Passward</label>
    <input required type="Passward" value={passward} onChange={e=>updateFields({passward:e.target.value})}/>
    </FormWrapper>
    )
}