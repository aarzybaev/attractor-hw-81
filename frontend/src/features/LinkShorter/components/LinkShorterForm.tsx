import {Button, Grid, TextField, Typography} from "@mui/material";
import React, {useState} from "react";

interface Props {
    formHandler: (url: string) => void;
    loading: boolean;
}
const LinkShorterForm: React.FC<Props> = ({formHandler, loading}) => {

    const [url, setUrl] = useState('');
    const submitFormHandler = (e: React.FormEvent) => {
        e.preventDefault();
        formHandler(url);
        setUrl('');
    };

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setUrl(value);
    };
    return (
        <Grid container direction="column">
            <Grid item xs textAlign="center">
                <Typography variant="h3" sx={{m: 5}}>Shorten your link!</Typography>
            </Grid>
            <Grid item xs>
                <form
                    autoComplete="off"
                    onSubmit={submitFormHandler}
                >
                    <Grid container direction="column"  spacing={2} alignItems="center">
                        <Grid item xs width="75%">
                            <TextField
                                id="url" label="URL"
                                value={url}
                                onChange={inputChangeHandler}
                                name="url"
                                type="url"
                                required
                            />
                        </Grid>
                        <Grid item xs>
                            <Button
                                type="submit"
                                color="primary"
                                variant="contained"
                                disabled={loading}
                            >
                                Shorten!
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    );
};

export default LinkShorterForm;