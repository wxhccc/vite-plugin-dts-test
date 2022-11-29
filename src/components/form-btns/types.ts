import { ButtonProps, FormInstance } from 'ant-design-vue'

export type BtnType = 'submit' | 'cancel' | 'reset'

export type BtnsProps = Partial<ButtonProps> | ((btnType?: BtnType) => Partial<ButtonProps>)

export interface BtnsTexts {
  sureBtn?: string
  cancelBtn?: string
  resetBtn?: string
  sending?: string
  confirmWord?: string
}
export interface FormBtnsProps {
  /** 当前是否在发送中 */
  sending?: boolean
  /** 表单实例 */
  form?: FormInstance
  /** 按钮的props对象，可用函数分别设置不同的按钮 */
  btnProps?: BtnsProps
  /** 配置文案 */
  texts?: BtnsTexts
  /** 按钮大小 */
  size?: ButtonProps['size']
}
