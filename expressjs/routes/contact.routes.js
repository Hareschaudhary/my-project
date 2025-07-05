import express from 'express';
const router = express.Router();

import {
  GateContact,
  ShowContact,
  AddContact,
  UpdateContact,
  PostContact,
  UpdatePostContact,
  Deletcontact
} from '../controller/contact.controller.js';

// Routes

// Home - List all contacts
router.get('/', GateContact);

// Show a specific contact
router.get('/show-contact/:id', ShowContact);

// Add a new contact (form)
router.get('/add-contact', AddContact);

// Handle contact form submission
router.post('/add-contact', PostContact);

// Edit contact (form)
router.get('/update-contact/:id', UpdateContact);

// Handle edit contact submission
router.post('/update-contact/:id', UpdatePostContact);

// Delete a contact
router.get('/delete-contact/:id', Deletcontact); // ✅ Correct spelling

export default router;
