import CircularProgress from '@material-ui/core/CircularProgress';
import { Button } from '@material-ui/core';

interface Props {
    onClick(): void;
    isLoading: boolean;
    label: string;
}

const ButtonWithLoader: React.FC<Props>  = ({onClick, isLoading, label}) => {
    return (
        <Button variant="contained" color="secondary" onClick={onClick}>
            { isLoading ? <CircularProgress color='inherit' size={22} /> : <span>{ label }</span>}   
        </Button>
    )
}

export default ButtonWithLoader;