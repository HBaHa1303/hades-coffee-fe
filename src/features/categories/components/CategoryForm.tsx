import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { Category } from "../models/categories.model";
import { useEffect, useState } from "react";

interface CategoryFormProps {
    open: boolean;
    category?: Category;
    onClose: () => void;
    onSubmit: (name: string) => void;
    loading?: boolean;
}

export default function CategoryForm ({
    open,
    category,
    onClose,
    onSubmit,
    loading
}: CategoryFormProps) {
    const [name, setName] = useState('');

    useEffect(() => {
        if (category) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setName(category.name);
        } else {
            setName('');
        }
    }, [category, open]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name.trim()) {
            onSubmit(name.trim());
        }
    }

    return (
        <Dialog open={open} maxWidth="sm" fullWidth>
            <form onSubmit={handleSubmit}>
                <DialogTitle>{category ? 'Cập nhật Category': 'Thêm mới Category'}</DialogTitle>
                <DialogContent>
                    <TextField 
                        autoFocus
                        margin="dense"
                        label="Tên category"
                        type= "text"
                        fullWidth
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={loading}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} disabled={loading}>Hủy</Button>
                    <Button type="submit" variant="contained">
                        {category ? 'Cập nhật' : 'Tạo mới'}
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}