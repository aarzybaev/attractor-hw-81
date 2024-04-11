import LinkShorterForm from "./components/LinkShorterForm.tsx";
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {createLink} from "./linksThunks.ts";
import {resetLink, selectLinkCreating, selectLinkItem} from "./linksSlice.ts";
import {Box, Grid, LinearProgress, Link, Typography} from "@mui/material";

const LinkShorter = () => {
    const dispatch = useAppDispatch();
    const link = useAppSelector(selectLinkItem);
    const createLoading = useAppSelector(selectLinkCreating);
    const formHandler = async (url: string) => {
        link && dispatch(resetLink());
        await dispatch(createLink(url));
    };
    const progress = (<Box sx={{ width: '100%' }}>
        <LinearProgress/>
    </Box>);

    return (
        <Grid container direction="column">
            <Grid item xs>
                <LinkShorterForm
                    formHandler={formHandler}
                    loading={createLoading}
                />
            </Grid>
            <Grid item xs textAlign="center" sx={{m: 3}}>
                {
                    link && <>
                        <Typography variant="h4" sx={{m: 5}}>Your link now looks like this:</Typography>
                        <Link href={`http://localhost:8000/${link.shortUrl}`}  sx={{mt: 3}}>http://localhost:8000/{link.shortUrl}</Link>
                    </> || createLoading && progress
                }

            </Grid>
        </Grid>
    );
};

export default LinkShorter;