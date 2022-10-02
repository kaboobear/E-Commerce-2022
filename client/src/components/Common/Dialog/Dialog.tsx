import {
  Dialog as DialogComponent,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBack from '@mui/icons-material/ArrowBack';
import * as styles from './styles';

interface Props extends PropsWithChildren {
  open: boolean;
  handleClose: () => void;
  isBackButtonExists?: boolean;
  onBackButtonClick?: () => void;
  backButton?: { exists: boolean; onClick: () => void };
}

export const Dialog: FC<Props> = ({
  children,
  open,
  handleClose,
  backButton,
}) => {
  return (
    <DialogComponent open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ m: 0, p: 3 }}>
        {backButton && backButton.exists && (
          <IconButton
            aria-label="back"
            onClick={backButton.onClick}
            sx={styles.backButton}
          >
            <ArrowBack />
          </IconButton>
        )}

        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={styles.closeButton}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ p: 2 }}>{children}</DialogContent>
    </DialogComponent>
  );
};
