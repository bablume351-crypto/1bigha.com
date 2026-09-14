'use client';

import { useMemo, useState } from 'react';

const states = {
  'Uttar Pradesh': [
    'Ghaziabad',
    'Tronica City',
    'Baghpat',
    'Loni',
    'Greater Noida',
    'Noida',
    'Lucknow',
    'Ballia',
    'Meerut',
    'Muzaffarnagar',
  ],
  Delhi: ['North Delhi', 'South Delhi', 'East Delhi', 'West Delhi', 'New Delhi'],
  Haryana: ['Gurugram', 'Faridabad', 'Sonipat', 'Panipat', 'Rohtak'],
  Rajasthan: ['Jaipur', 'Alwar', 'Kota', 'Ajmer', 'Jodhpur'],
  Bihar: ['Patna', 'Gaya', 'Muzaffarpur', 'Bhagalpur'],
  Punjab: ['Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala'],
};

type StateName = keyof typeof states;

export default function Sell() {
  const [selectedState, setSelectedState] = useState<StateName | ''>('');
  const [submitted, setSubmitted] = useState(false);

  const districts = useMemo(() => {
    if (!selectedState) return [];
    return states[selectedState];
  }, [selectedState]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="section">
      <div className="container">
        <div
          className="panel"
          style={{
            maxWidth: 900,
            margin: '0 auto',
          }}
        >
          <h1>List Your Property</h1>

          <p className="muted">
            Add your property details and reach interested buyers.
          </p>

          {submitted ? (
            <div
              style={{
                padding: 24,
                marginTop: 24,
                borderRadius: 16,
                background: '#e9f7ef',
                border: '1px solid #b7dfc6',
              }}
            >
              <h3 style={{ marginTop: 0 }}>
                ✅ Property details received
              </h3>

              <p className="muted">
                Your listing information has been submitted successfully.
              </p>

              <button
                type="button"
                className="btn primary"
                onClick={() => setSubmitted(false)}
              >
                Add Another Property
              </button>
            </div>
          ) : (
            <form className="formgrid" onSubmit={handleSubmit}>
              <input
                className="input"
                name="title"
                placeholder="Property title"
                required
              />

              <select
                className="input"
                name="type"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Property type
                </option>
                <option>Agricultural Land</option>
                <option>Residential Plot</option>
                <option>Commercial Plot</option>
                <option>Farm Land</option>
                <option>Industrial Land</option>
              </select>

              <select
                className="input"
                name="state"
                value={selectedState}
                onChange={(e) =>
                  setSelectedState(e.target.value as StateName | '')
                }
                required
              >
                <option value="" disabled>
                  Select state
                </option>
                {Object.keys(states).map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>

              <select
                className="input"
                name="district"
                defaultValue=""
                required
                disabled={!selectedState}
              >
                <option value="" disabled>
                  {selectedState
                    ? 'Select district / city'
                    : 'Select state first'}
                </option>
                {districts.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>

              <input
                className="input"
                name="mobile"
                type="tel"
                inputMode="numeric"
                pattern="[6-9][0-9]{9}"
                maxLength={10}
                placeholder="Mobile number (10 digits)"
                required
              />

              <input
                className="input"
                name="area"
                placeholder="Area (e.g. 5 Bigha)"
                required
              />

              <input
                className="input"
                name="price"
                placeholder="Expected price"
                required
              />

              <input
                className="input"
                name="road"
                placeholder="Road access / nearby landmark"
              />

              <input
                className="input full"
                name="landmark"
                placeholder="Nearby landmark (optional)"
              />

              <textarea
                className="input full"
                name="description"
                rows={5}
                placeholder="Property details"
                required
              />

              <input
                className="input full"
                name="images"
                type="file"
                accept="image/*"
                multiple
              />

              <button
                className="btn primary full"
                type="submit"
              >
                Submit Property
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
