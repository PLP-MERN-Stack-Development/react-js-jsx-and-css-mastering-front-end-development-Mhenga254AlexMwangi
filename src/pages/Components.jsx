import React, { useState } from 'react';
import Button from '../components/Button/Button';
import Card, { CardHeader, CardBody, CardFooter } from '../components/Card/Card';

const Components = () => {
  const [clickCount, setClickCount] = useState(0);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Component Library
      </h1>

      {/* Button Variants Section */}
      <Card>
        <CardHeader>
          <h2 className="text-2xl font-semibold text-gray-800">Button Variants</h2>
        </CardHeader>
        <CardBody>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="danger">Danger Button</Button>
              <Button variant="outline">Outline Button</Button>
            </div>
            
            <div className="flex flex-wrap gap-4 items-center">
              <Button size="small" variant="primary">Small</Button>
              <Button size="medium" variant="primary">Medium</Button>
              <Button size="large" variant="primary">Large</Button>
            </div>
            
            <div className="flex flex-wrap gap-4 items-center">
              <Button disabled variant="primary">Disabled Primary</Button>
              <Button disabled variant="secondary">Disabled Secondary</Button>
            </div>
            
            <div className="pt-4">
              <Button 
                variant="primary" 
                onClick={() => setClickCount(prev => prev + 1)}
              >
                Clicked {clickCount} times
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Card Variants Section */}
      <Card>
        <CardHeader>
          <h2 className="text-2xl font-semibold text-gray-800">Card Variants</h2>
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Basic Card */}
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Basic Card</h3>
              </CardHeader>
              <CardBody>
                <p className="text-gray-600">
                  This is a basic card with default padding and shadow.
                </p>
              </CardBody>
              <CardFooter>
                <Button variant="outline" size="small">Action</Button>
              </CardFooter>
            </Card>

            {/* No Border Card */}
            <Card border={false} shadow="large">
              <CardHeader>
                <h3 className="text-lg font-semibold">No Border Card</h3>
              </CardHeader>
              <CardBody>
                <p className="text-gray-600">
                  This card has no border but has a larger shadow.
                </p>
              </CardBody>
            </Card>

            {/* Different Padding */}
            <Card padding="small">
              <CardBody>
                <p className="text-gray-600">
                  This card has small padding.
                </p>
              </CardBody>
            </Card>

            <Card padding="large">
              <CardBody>
                <p className="text-gray-600">
                  This card has large padding.
                </p>
              </CardBody>
            </Card>
          </div>
        </CardBody>
      </Card>

      {/* Combined Usage */}
      <Card shadow="large">
        <CardHeader>
          <h2 className="text-2xl font-semibold text-gray-800">Combined Usage</h2>
        </CardHeader>
        <CardBody>
          <p className="text-gray-600 mb-4">
            Here's an example of using buttons inside cards for a clean UI.
          </p>
          <div className="flex gap-3">
            <Button variant="primary">Save Changes</Button>
            <Button variant="outline">Cancel</Button>
            <Button variant="danger">Delete</Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Components;
