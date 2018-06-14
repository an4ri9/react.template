import { ADD_FLASH_MESSAGE } from '../types/flashMessages';

export function addFlashMessage(message) {
    return {
        type: ADD_FLASH_MESSAGE,
        message
    }
}