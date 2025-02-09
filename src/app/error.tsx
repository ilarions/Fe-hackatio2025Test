"use client"
import { Stack, Button, Typography } from "@mui/material"

export default function ErrorBoundary({ error }: { error: { message: string } }) {
    const tryAgain = () => { window.location.reload() };
    
    return (
        <Stack sx={{ gap: "50px", marginTop: "100px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Stack sx={{ gap: "10px", color: "#362989", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Typography variant="h3">Oooooops!?:(</Typography>
                <Typography variant="h4">{error.message}</Typography>
            </Stack>
            <Button sx={{ bgcolor: "#4635B1", fontSize: "20px", padding: "10px 80px", color: "white" }} onClick={tryAgain}>Try again</Button>
        </Stack>
    )
}