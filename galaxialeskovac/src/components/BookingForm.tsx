import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Rocket, Calendar, Users, Phone, User, MessageSquare, Check, X } from 'lucide-react';

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const packages = [
  { id: 'jupiter', name: 'Jupiter', price: '900 RSD' },
  { id: 'mars', name: 'Mars', price: '1100 RSD' },
  { id: 'venera', name: 'Venera', price: '1400 RSD' },
  { id: 'mlecni-put', name: 'Mlečni Put', price: '650 RSD' },
];

const BookingForm = ({ isOpen, onClose }: BookingFormProps) => {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childAge: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    package: '',
    guestCount: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Booking submitted:', formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const resetForm = () => {
    setFormData({
      parentName: '',
      childName: '',
      childAge: '',
      phone: '',
      email: '',
      date: '',
      time: '',
      package: '',
      guestCount: '',
      message: '',
    });
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto overflow-x-hidden bg-card border border-border rounded-3xl shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-muted hover:bg-muted/80 transition-colors z-10"
        >
          <X className="w-5 h-5 text-foreground" />
        </button>

        {isSubmitted ? (
          /* Success state */
          <div className="p-8 text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-neon-cyan to-primary flex items-center justify-center">
              <Check className="w-10 h-10 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2 font-display">
              Zahtev je poslat!
            </h3>
            <p className="text-muted-foreground mb-6">
              Hvala vam na interesovanju! Kontaktiraćemo vas uskoro da potvrdimo rezervaciju.
            </p>
            <Button variant="galaxy" onClick={resetForm}>
              Zatvori
            </Button>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit} className="p-6 md:p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-4">
                <Rocket className="w-4 h-4 text-neon-cyan" />
                <span className="text-sm font-medium text-foreground/90">Rezervacija rođendana</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground font-display">
                Zakažite <span className="text-gradient-galaxy">svemirsku avanturu</span>
              </h3>
              <p className="text-muted-foreground mt-2">
                Popunite formular i javićemo vam se u najkraćem roku
              </p>
            </div>

            {/* Form fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Parent name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <User className="w-4 h-4 text-muted-foreground" />
                  Ime roditelja *
                </label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                  placeholder="Vaše ime"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  Telefon *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                  placeholder="060 123 4567"
                />
              </div>

              {/* Child name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <User className="w-4 h-4 text-muted-foreground" />
                  Ime deteta *
                </label>
                <input
                  type="text"
                  name="childName"
                  value={formData.childName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                  placeholder="Ime slavljenika"
                />
              </div>

              {/* Child age */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  Godine deteta *
                </label>
                <input
                  type="number"
                  name="childAge"
                  value={formData.childAge}
                  onChange={handleChange}
                  required
                  min="1"
                  max="15"
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                  placeholder="5"
                />
              </div>

              {/* Date */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  Željeni datum *
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full max-w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground box-border"
                />
              </div>

              {/* Time */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  Željeno vreme *
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                >
                  <option value="">Izaberite vreme</option>
                  <option value="10:00">10:00</option>
                  <option value="12:00">12:00</option>
                  <option value="14:00">14:00</option>
                  <option value="16:00">16:00</option>
                  <option value="18:00">18:00</option>
                  <option value="20:00">20:00</option>
                </select>
              </div>

              {/* Package */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Rocket className="w-4 h-4 text-muted-foreground" />
                  Paket *
                </label>
                <select
                  name="package"
                  value={formData.package}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                >
                  <option value="">Izaberite paket</option>
                  {packages.map(pkg => (
                    <option key={pkg.id} value={pkg.id}>
                      {pkg.name} - {pkg.price}
                    </option>
                  ))}
                </select>
              </div>

              {/* Guest count */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  Broj gostiju *
                </label>
                <input
                  type="number"
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={handleChange}
                  required
                  min="1"
                  max="50"
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                  placeholder="10"
                />
              </div>

              {/* Message */}
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-muted-foreground" />
                  Dodatne napomene
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground resize-none"
                  placeholder="Alergije, posebni zahtevi..."
                />
              </div>
            </div>

            {/* Submit button */}
            <div className="mt-6">
              <Button type="submit" variant="galaxy" size="xl" className="w-full">
                <Rocket className="w-5 h-5 mr-2" />
                Pošalji zahtev za rezervaciju
              </Button>
              <p className="text-center text-muted-foreground text-xs mt-3">
                * Kontaktiraćemo vas telefonom da potvrdimo detalje rezervacije
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default BookingForm;
