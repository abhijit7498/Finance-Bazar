import {
    LockKeyhole,
    User,
    Mail,
    Phone,
    MapPin,
    Calendar,
    Map,
    BriefcaseBusiness,
    Landmark,
    BanknoteArrowUp,
} from 'lucide-react';
import { TypographyH3, TypographyH4 } from '@/custom/Typography';
import { InputField } from '@/custom/Fields';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { useState, useEffect } from 'react';
import { employmentOptions } from '../pages/personal-loan/PersonalLoanApply';

export default function Profile() {
    const [formData, setFormData] = useState({
        name: '',
        dob: '',
        email: '',
        mobile: '',
        address: '',
        pinCode: '',
        panNumber: '',
        employmentType: '',
        employerName: '',
        monthlyIncome: '',
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(true);

    // Show Skeleton for 2.5 seconds
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2500);
        return () => clearTimeout(timer);
    }, []);

    const maskPanNumber = (pan) => {
        return pan.length === 10
            ? pan.substring(0, 2) + 'XXXXXX' + pan.substring(8)
            : pan;
    };

    const formatDOB = (value) => {
        const clean = value.replace(/\D/g, '').slice(0, 8);
        let formatted = '';
        if (clean.length > 0) formatted += clean.slice(0, 2);
        if (clean.length > 2) formatted += '-' + clean.slice(2, 4);
        if (clean.length > 4) formatted += '-' + clean.slice(4, 8);
        return formatted;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        let formattedValue = value;

        switch (name) {
            case 'name':
            case 'address':
            case 'panNumber':
                formattedValue = value.toUpperCase();
                break;
            case 'dob':
                formattedValue = formatDOB(value);
                break;
            case 'mobile':
                formattedValue = value.replace(/\D/g, '').slice(0, 10);
                break;
            case 'pinCode':
                formattedValue = value.replace(/\D/g, '').slice(0, 6);
                break;
            default:
                break;
        }

        setFormData((prev) => ({ ...prev, [name]: formattedValue }));
        validateField(name, formattedValue);
    };

    const validateField = (name, value) => {
        let error = '';
        switch (name) {
            case 'email':
                error = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value) ? '' : 'Enter a valid email.';
                break;
            case 'mobile':
                error = /^\d{10}$/.test(value) ? '' : 'Mobile number must be 10 digits.';
                break;
            case 'pinCode':
                error = /^\d{6}$/.test(value) ? '' : 'Pin code must be 6 digits.';
                break;
            case 'panNumber':
                error = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value) ? '' : 'Invalid PAN (ABCDE1234F).';
                break;
            default:
                if (!value.trim()) error = 'This field is required.';
                break;
        }
        setErrors((prev) => ({ ...prev, [name]: error }));
    };

    const validateAll = () => {
        const requiredFields = [
            'name',
            'dob',
            'email',
            'mobile',
            'address',
            'pinCode',
            'panNumber',
            'employmentType',
            'employerName',
            'monthlyIncome',
        ];
        const newErrors = {};

        requiredFields.forEach((field) => {
            const value = formData[field];
            let error = '';

            switch (field) {
                case 'email':
                    error = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value) ? '' : 'Enter a valid email.';
                    break;
                case 'mobile':
                    error = /^\d{10}$/.test(value) ? '' : 'Mobile number must be 10 digits.';
                    break;
                case 'pinCode':
                    error = /^\d{6}$/.test(value) ? '' : 'Pin code must be 6 digits.';
                    break;
                case 'panNumber':
                    error = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value) ? '' : 'Invalid PAN (ABCDE1234F).';
                    break;
                default:
                    if (!value.trim()) error = 'This field is required.';
                    break;
            }

            if (error) {
                newErrors[field] = error;
            }
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSave = () => {
        try {
            if (validateAll()) {
                const maskedPan = maskPanNumber(formData.panNumber);
                const finalData = { ...formData, panNumber: maskedPan };
                console.log('Saved Profile Data:', finalData);
                alert('Profile saved successfully!');
            } else {
                console.warn('Validation failed. Not saving.');
            }
        } catch (err) {
            console.error('Error during saving:', err);
        }
    };

    const fields = [
        { label: 'Name', name: 'name', iconLeft: User, iconRight: LockKeyhole, placeholder: 'Enter your full name' },
        { label: 'Date of Birth', name: 'dob', iconLeft: Calendar, iconRight: LockKeyhole, placeholder: 'DD-MM-YYYY' },
        { label: 'Email', name: 'email', iconLeft: Mail, placeholder: 'Enter your email address' },
        { label: 'Mobile Number', name: 'mobile', iconLeft: Phone, iconRight: LockKeyhole, placeholder: 'Enter your mobile number' },
        { label: 'Address', name: 'address', iconLeft: Map, iconRight: LockKeyhole, placeholder: 'Enter your current address' },
        { label: 'Pin Code', name: 'pinCode', iconLeft: MapPin, iconRight: LockKeyhole, placeholder: 'Enter your 6-digit pin code' },
        { label: 'PAN Number', name: 'panNumber', iconLeft: LockKeyhole, iconRight: LockKeyhole, placeholder: 'ABCDE1234F' },
    ];

    return (
        <div className='mx-4 sm:mx-0'>
            <TypographyH3 className="text-blue-950 text-xl font-bold tracking-normal mb-4">
                Welcome! Amol
            </TypographyH3>

            {/* Personal Details */}
            <div className="bg-white shadow-md rounded-lg p-4">
                <TypographyH4 className="text-blue-950 tracking-normal">
                    Personal Details
                </TypographyH4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 w-full">
                    {loading
                        ? Array.from({ length: 6 }).map((_, idx) => (
                            <Skeleton key={idx} className="h-16 w-full rounded-md" />
                        ))
                        : fields.map(({ label, name, iconLeft, iconRight, placeholder }) => (
                            <InputField
                                key={name}
                                label={label}
                                name={name}
                                value={formData[name]}
                                onChange={handleChange}
                                error={errors[name]}
                                type="text"
                                iconLeft={iconLeft}
                                iconRight={iconRight}
                                placeholder={placeholder}
                                maxLength={
                                    name === 'mobile'
                                        ? 10
                                        : name === 'pinCode'
                                            ? 6
                                            : name === 'dob'
                                                ? 10
                                                : undefined
                                }
                            />
                        ))}
                </div>
            </div>

            {/* Employment Details */}
            <div className="bg-white shadow-md rounded-lg p-4 mt-8">
                <TypographyH4 className="text-blue-950 tracking-normal">
                    Employment Details
                </TypographyH4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 w-full">
                    {loading ? (
                        <>
                            <Skeleton className="h-16 w-full rounded-md" />
                            <Skeleton className="h-16 w-full rounded-md" />
                            <Skeleton className="h-16 w-full rounded-md" />
                        </>
                    ) : (
                        <>
                            <InputField
                                label="Employment Type"
                                name="employmentType"
                                value={formData.employmentType}
                                onChange={(e) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        employmentType: e.target.value,
                                    }))
                                }
                                type="select"
                                options={employmentOptions}
                                iconLeft={BriefcaseBusiness}
                                placeholder="Select Employment Type"
                            />

                            <InputField
                                label="Employer Name"
                                name="employerName"
                                value={formData.employerName}
                                onChange={handleChange}
                                type="text"
                                iconLeft={Landmark}
                                placeholder="Your Company Name"
                                error={errors.employerName}
                            />

                            <InputField
                                label="Monthly Income"
                                name="monthlyIncome"
                                value={formData.monthlyIncome}
                                onChange={handleChange}
                                type="text"
                                iconLeft={BanknoteArrowUp}
                                placeholder="Your Monthly Income"
                                error={errors.monthlyIncome}
                            />
                        </>
                    )}
                </div>
            </div>

            {!loading && (
                <div className="text-right mb-20 mt-8">
                    <Button onClick={handleSave} className="px-10">
                        Save Profile
                    </Button>
                </div>
            )}
        </div>
    );
}
