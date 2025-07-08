import Contact from '../models/contacs.models.js';
import mongoose from 'mongoose';


export const GateContact = async (req, res) => {
  const {page =1 , limit = 5} = req.query
  const opctions ={
    page: parseInt(page),
    limit : parseInt(limit) 
  }
  const result = await Contact.paginate({}, opctions)

  res.render('home', {
  totalDocs: result.totalDocs ,
  limit: result.limit,
  totalPages: result.totalPages,
  currentPage: result.page,
  Counter: result.pagingCounter,
  hasPrevPage: result.hasPrevPage,
  hasNextPage: result.hasNextPage,
  prevPage: result.prevPage,
  nextPage: result.nextPage,
  connects: result.docs
   });
};

export const ShowContact = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.render('404', { message: 'Invalid ID' });
  }

  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.render('404', { message: 'Contact Not Found' });
    }
    res.render('show-contact', { contact });
  } catch (error) {
    res.render('500', { message: error.message });
  }
};

export const AddContact = (req, res) => {
  res.render('add-contact',);
};

export const PostContact = async (req, res) => {
  try{
    await Contact.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
    });
    res.redirect('/'); 
  }catch(error) {
    res.render('500', { message: error.message });
  }
};

export const UpdateContact = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.render('404', { message: 'Invalid ID' });
  }

  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.render('404', { message: 'Contact Not Found' });
    }
    res.render('update-contact', {UpdateContact : contact });
  } catch (error) {
    res.render('500', { message: error.message });
  }
};

export const UpdatePostContact = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.render('404', { message: 'Invalid ID' });
  }

  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!contact) {
      return res.render('404', { message: 'Contact Not Found' });
    }
    res.redirect('/');
  } catch (error) {
    res.render('500', { message: error.message });
  }
};

export const Deletcontact = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.render('404', { message: 'Invalid ID' });
  }

  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      return res.render('404', { message: 'Contact Not Found' });
    }
    res.redirect('/');
  } catch (error) {
    res.render('500', { message: error.message });
  }
};
