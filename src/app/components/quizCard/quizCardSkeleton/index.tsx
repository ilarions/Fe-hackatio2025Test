import { Card, Skeleton, Stack, CardActions, CardContent } from "@mui/material"

export const QuizCardSkeleton = () => (
    <Card sx={{ width: "300px" }}>
        <Skeleton variant="rectangular" width="100%" height={200} />
        <CardContent sx={{ gap: "40px", padding: "10px" }}>
            <Stack sx={{ gap: "10px", marginBottom: "20px" }}>
                <Skeleton variant="text" width="80%" height={30} />
                <Skeleton variant="text" width="100%" height={20} />
            </Stack>
            <CardActions sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0px" }}>
                <Skeleton variant="text" width={50} height={20} />
                <Skeleton variant="rectangular" width={80} height={30} />
            </CardActions>
        </CardContent>
    </Card>
);