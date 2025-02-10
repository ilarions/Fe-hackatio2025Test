"use client"
import { Stack, Button, Typography } from "@mui/material"

export const ErrorContainer = ({ error, onClick }: { error: string; onClick: () => void }) => {
    return (
        <Stack sx={{ gap: "50px", margin: "250px auto", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Stack sx={{ gap: "10px", color: "#362989", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Typography variant="h3">Oooooops!?:(</Typography>
                <Typography variant="h4">{error}</Typography>
            </Stack>
            <Button sx={{ bgcolor: "#4635B1", fontSize: "20px", padding: "10px 80px", color: "white" }} onClick={onClick}>Try again</Button>
        </Stack>
    )
}