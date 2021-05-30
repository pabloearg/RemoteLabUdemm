// @flow
import i18n from '../../utils/i18n';

type Pronoum = 'pronoumC' | 'pronoumU' | 'pronoumL' | 'pronoumPropC' | 'pronoumPropU' | 'propnoumL' | 'pronoumPropL'

const getString = (scope: Scope, options?: TranslateOptions | any): string => i18n.t(scope, options);

export default getString;
type Scope = string | string[];

interface InterpolateOptions {
    [key: string]: any; // interpolation
}

interface TranslateOptions extends InterpolateOptions {
    scope?: Scope;
    message?: string;
    defaults?: Array<{ message: string } | { scope: Scope }>;
    defaultValue?: string;
    isParent?: boolean;
    selfReference?: boolean,
    gender?: string,
}
